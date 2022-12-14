const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/database/index');
const methodOverride = require('method-override');

// Connect to db
db.connect();

// Static file public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
'/css',
express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')),
);
app.use(
'/js',
express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')),
);
app.use(
'/js',
express.static(path.join(__dirname, '../node_modules/jquery/dist')),
);
app.use(
'/js',
express.static(path.join(__dirname, '../node_modules/@popperjs/core/dist')),
);

// middleware data form submit
app.use(
express.urlencoded({
extended: true,
}),
);
app.use(express.json());

//HPPT logger
app.use(morgan('combined'));

// Override method
app.use(methodOverride('_method'));

// Template engine
app.engine(
'.hbs',
handlebars.engine({
defaultLayout: 'main',
extname: '.hbs',
helpers: {
sum: (a, b) => a + b,
},
}),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//router
route(app);

app.listen(port);
