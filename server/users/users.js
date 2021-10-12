const bcrypt = require('bcryptjs');
const User = require('./models/user-model');

async function authenUser(userInfo) {
    var user = await User.findOne({ username: userInfo.username });
    if (!user) return 'Invalid User';
    if (await bcrypt.compare(userInfo.password, user.password)) {
        return 'Success';
    }
    return 'Incorrect Password';
}

async function addUser(info) {
    var encryptedPassword = await bcrypt.hash(info.password, 10);
    info.password = encryptedPassword;

    const newUser = new User(info);
    await newUser.save();
    
    return info;
}

async function registerUser(info) {
    var user = await User.findOne({ username: info.username });
    if (!!user) return ({
        error: 'Username taken'
    });
    return addUser(info);

}

module.exports = {
    authenUser,
    registerUser
}