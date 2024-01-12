const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({name: String});
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;