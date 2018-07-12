const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const SubSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true,
        index: 1,
    },
    url: {
        type: String,
        required: true,
    }
});

const Sub = mongoose.model('sub', SubSchema);

async function insert(sub) {
    const created =  await Sub.create(sub);
    return created;
}

async function list(params) {
    const match = {};
    const flow = Sub.find(match);
    const subs = await flow.exec();
    return subs;
}

async function findByUserId(userId) {
    const subs = await Sub.find({userId});
    return subs;
}


module.exports = {
    insert,
    findByUserId,
    list,
};

