const userRouter = require('./users');
const loginRouter = require('./login');
const homeRouter = require('./home');

function route(app) {
  app.use('/login', loginRouter);

  app.use('/users', userRouter);

  app.use('/', homeRouter);
}

module.exports = route;
