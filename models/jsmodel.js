const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Javascript = new Schema({
    subject: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    }
    
});

module.exports = mongoose.model('Javascript', Javascript);