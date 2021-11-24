const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const methodOverride = require('method-override');
const morgan = require('morgan');

const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const cadRouter = require('./routes/cadRouter');
const perfilRouter = require('./routes/perfilRouter');
const feedRouter = require('./routes/feedRouter');
const amizadeRouter = require('./routes/amizadeRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:"CONNECTPET",
  resave: true,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/', amizadeRouter);

app.use('/', authRouter);
app.use('/', feedRouter);
app.use('/', perfilRouter);
app.use('/', cadRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})


module.exports = app
