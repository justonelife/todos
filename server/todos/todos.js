const Todo = require('./models/todo-model');
const User = require('../users/models/user-model');

async function addTodo(todo, ownerName) {
    var user = await User.findOne({ username: ownerName });
    todo.ownerId = user._id;

    const newTodo = new Todo(todo);
    await newTodo.save();
    delete todo.ownerId;
    return todo;
}

async function getTodos(ownerName) {
    var user = await User.findOne({ username: ownerName });
    var todos = await Todo.find({ ownerId: user._id }).select('title description');
    
    return todos;
}

module.exports = {
    addTodo,
    getTodos
}