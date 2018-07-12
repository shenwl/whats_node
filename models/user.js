const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: 1
    },
    age: {
        type: Number,
        min: 0,
        max: 180
    }
});

const User = mongoose.model('user', UserSchema);

async function insert(user) {
    const created =  await User.create(user);
    return created;
}

async function getOneById(id) {
    const user = await User.findOne({_id: id});
    return user;
}

async function getOneByName(name) {
    const user = await User.findOne({name: name});
    return user;
}

async function list(params) {
    const match = {};
    const flow = User.find(match);
    const users = await flow.exec();
    return users;
}

module.exports = {
    insert,
    getOneById,
    getOneByName,
    list,
}

