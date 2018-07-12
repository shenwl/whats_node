const User = require('../models/mongoose/user');
const Subscription = require('../models/mongoose/subscription');

module.exports.getAllUsers = async function () {
    const users = await User.list();
    return users;
};

module.exports.addNewUser = async function (name, age) {
    const users = await User.insert({
        name,
        age,
    });
    return users;
};

module.exports.getUserById = async function (id) {
    const users = await User.getOneById(id);
    return users;
};

module.exports.getUserByName = async function (name) {
    const users = await User.getOneByName(name);
    return users;
};

module.exports.createSubscription = async function (userId, url) {
    const user = await User.getOneById(userId);
    if (!user) throw Error('No such user !');
    const sub = Subscription.insert(userId, url);
    return sub
};