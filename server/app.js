require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { authenUser, registerUser } = require('./users/users');
const auth = require('./middleware/auth');
const jwt = require('jsonwebtoken');
const cors = require('cors');

//@desc middleware
app.use(cors())
app.use(express.json());

//@route POST /login
//@desc authenticate username && password
app.post('/login', (req, res) => {
    var message = authenUser(req.body);
    let user = req.body;
    if (message === 'Success') {
        const token = jwt.sign(
            {username: user.username},
            process.env.PRIVATE_KEY,
            {
                expiresIn: '1h'
            }
        )
        user.token = token;
        res.status(200).json(user);
    } else if (message == 'Incorrect Password') {
        res.status(403).json({ message });
    } else {
        res.status(401).json({ message });
    }
});

//@route POST /register
//@desc register new user
app.post('/register', (req, res) => {
    var result = registerUser(req.body);
    res.json(result);
});

//@route GET /todos
//@desc list all user's todos
app.get('/todos', auth, (req, res) => {
    res.status(200).json({ message: 'hello' });
});

app.listen(3000, () => console.log(`Server running on PORT: ${PORT}`));
