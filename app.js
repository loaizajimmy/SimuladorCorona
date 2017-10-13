const express = require('express');

const path = require('path');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');

const port = process.env.PORT || 7876;
let app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//public folder
app.use(express.static(path.join(__dirname, 'public')));

//favicon
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// Routes
const routes = require('./routes/routes');

app.use(routes);

//view engine
app.set("view engine", "pug");


app.listen(port, function (err) {
    console.log(`Server running in ${port}`);
    console.log(`Test in http://localhost:${port}/`)
});
