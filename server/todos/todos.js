const fs = require('fs');

const getTodosData = () => {
    var dataBuffer = fs.readFileSync('./todos/todos_data.json');
    var dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
}

const setTodosData = (data) => {
    var dataBuffer = JSON.stringify(data);
    fs.writeFileSync('./todos/todos_data.json', dataBuffer);
}

const addTodo = (todo, owner) => {
    var data = getTodosData();
    todo.owner = owner;
    data.push(todo);
    setTodosData(data);
    return todo;
}

const getTodos = (owner) => {
    var data = getTodosData();
    return data.filter(item => item.owner === owner);
}

module.exports = {
    addTodo,
    getTodos
}