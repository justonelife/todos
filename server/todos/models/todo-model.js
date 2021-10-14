const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    status: String,
    ownerId: mongoose.ObjectId
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;