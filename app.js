var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var session = require("express-session");



var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/users');
var editarPerfilRouter = require('./routes/editarPerfilRouter');
var authRouter = require('./routes/authRouter');
var feedRouter = require('./routes/feedRouter');



var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(session({
  secret: "447cbdad9d4163df58f0fd6538d6363f", // Uma chave segura, podendendo ser qualquer string, para uma maior segurança procure algo como um UUID;
  resave: true, // Opção que diz para o servidor, que a sessão deve ser renovada a cada acesso;
  saveUninitialized: true, // Força uma sessão que não está inicializada para que seja salva na store;
})
);
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))




app.use('/users', usersRouter);
app.use('/editarPerfil', editarPerfilRouter);
app.use('/', feedRouter);
app.use('/', authRouter);
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
