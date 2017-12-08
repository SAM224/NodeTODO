var mongoose = require('mongoose');

var todoScema = new mongoose.Schema
({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todo);

module.exports = Todos;