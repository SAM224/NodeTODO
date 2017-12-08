var Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        // Seed Database
        var starterTodos = [
            {
                username: 'test',
                todo: 'play on piano',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn node',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Clean up',
                isDone: false,
                hasAttachment: false
            }
        ];
      
            Todos.create(starterTodos, (err,results) =>{
                res.send(results);
            });
    });
}