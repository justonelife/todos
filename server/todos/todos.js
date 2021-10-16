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

async function getTodos(ownerName, status) {
    var user = await User.findOne({ username: ownerName });
    var todos = undefined;
    if (status) {
        todos = await Todo.find({ ownerId: user._id, status: status }).select('title description status');
    } else {
        todos = await Todo.find({ ownerId: user._id }).select('title description status');
    }
    
    return todos;
}

async function changeTodoStatus(id, status) {
    var res = await Todo.updateOne(
        { _id: id }, 
        { $set: { status: status } 
    });
    // res.n Number of documents matched
    // res.nModified Number of documents modefined
    return res.nModified;
}

async function deleteTodo(id) {
    var document = await Todo.findByIdAndDelete(id);
    return document;
}

async function updateTodo(data) {
    var document = await Todo.updateOne(
        { _id: data.id },
        {
            $set: { title: data.title, description: data.description }
        }
    );

    return document;
}

module.exports = {
    addTodo,
    getTodos,
    changeTodoStatus,
    deleteTodo,
    updateTodo
}