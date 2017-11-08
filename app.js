// function logger() {
//     console.log(data);
// }

// function db_stuff(my_input, callback) {
//     console.log(callback);
//     //does db stuff
//     console.log('inside db_stuff');
//     var response = '';
//     response += 'this ';
//     //more work
//     response += ' works, maybe';
//     response += my_input;
//     console.log('response');
//     callback(response); //LEARN CALLBACKS!!!
// }

// db_stuff('morning!', logger);

var app = require('express')(); // same as "app = express();"
var port = 2500;
var routes = require('./routes/routes');
var fileSystem = require('fs');
var circularJSON = require('circular-json');

app.set('view engine', 'ejs');
app.use(routes);


app.listen(port, waiting);

function waiting() {
    console.log('waiting on localhost:' + port);
}