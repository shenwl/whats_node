const mongoose = require('mongoose');

mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const uri = 'mongodb://127.0.0.1:27017/mongoose-demo';
const connection = mongoose.connect(uri);
const db = mongoose.connection;


db.on('open', () => {
    console.log('conn');
});

db.on('error', (e) => {
    console.log(e);
});

module.exports = db;