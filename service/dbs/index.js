const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stusdb', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('open', () => {
    console.log('开');
})
db.on('error', (error) => {
    console.log(error);
})

const stusSchema = mongoose.Schema({
    name:String,
    password:String,
    admin:String
})
const Stus = mongoose.model('stus',stusSchema);

module.exports = { Stus }