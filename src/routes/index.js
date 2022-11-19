const userRouter = require('./users');
const loginRouter = require('./login');
const homeRouter = require('./home');
const courseRouter = require('./course');

function route(app) {
app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use('/courses', courseRouter);

app.use('/', homeRouter);
}

module.exports = route;
