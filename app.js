var chalk = require('chalk');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + 'public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`
    Server started on port: ` +chalk.green(port)+`
    Navigate to: `+chalk.green('http://localhost:'+ port));
});