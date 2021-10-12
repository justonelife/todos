require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { authenUser, registerUser } = require('./users/users');
const { addTodo, getTodos } = require('./todos/todos');
const auth = require('./middleware/auth');
const jwt = require('jsonwebtoken');
const cors = require('cors');

//@desc connect mongodb
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/todo');
}

//@desc middleware
app.use(cors())
app.use(express.json());

//@route POST /login
//@desc authenticate username && password
app.post('/login', async (req, res) => {
    var message = await authenUser(req.body);
    var user = req.body;
    if (message === 'Success') {
        const token = jwt.sign(
            {username: user.username},
            process.env.PRIVATE_KEY,
            {
                expiresIn: '1h'
            }
        )
        user.token = token;
        delete user.password;
        res.status(200).json(user);
    } else if (message == 'Incorrect Password') {
        res.status(403).json({ message });
    } else {
        res.status(401).json({ message });
    }
});

//@route POST /register
//@desc register new user
app.post('/register', async (req, res) => {
    var result = await registerUser(req.body);
    if (result.error) res.status(409).json(result);
    res.status(201).json(result);
});

//@route GET /todos
//@desc list all user's todos
app.get('/todos', auth, async (req, res) => {
    var todos = await getTodos(req.user.username);
    res.status(200).json(todos);
});

//@route POST /add
//@desc add new todo
app.post('/add', auth, async (req, res) => {
    var result = await addTodo(req.body, req.user.username);
    res.status(201).json(result);
});

app.listen(3000, () => console.log(`Server running on PORT: ${PORT}`));
