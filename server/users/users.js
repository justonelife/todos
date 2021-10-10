const fs = require('fs');

const getUsersData = () => {
    var dataBuffer = fs.readFileSync('./users/users_data.json');
    var dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
}

const setUsersData = (data) => {
    var dataBuffer = JSON.stringify(data);
    fs.writeFileSync('./users/users_data.json', dataBuffer);
}

const getUserPassword = (name) => {
    var data = getUsersData();
    var found = data.filter(user => user.username === name)[0];
    if (found) return found.password;
    return null;
}

const authenUser = (userInfo) => {
    var databasePassword = getUserPassword(userInfo.username);
    if (!databasePassword) return 'Invalid User';
    return (userInfo.password === databasePassword) ? 'Success' : 'Incorrect Password';
}

const getUserBaseName = (name) => {
    var data = getUsersData();
    var found = data.filter(user => user.username === name)[0];
    return !!found;
}

const addUser = (info) => {
    var data = getUsersData();
    data.push(info);
    setUsersData(data);
    return info;
}

const registerUser = (info) => {
    var found = getUserBaseName(info.username);
    if (found) return ({
        error: 'Username taken'
    });
    return addUser(info);

}

module.exports = {
    authenUser,
    registerUser
}