const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
// const cookieSession = require('cookie-session')
const session = require('express-session')
const logger = require('morgan')

const indexRouter = require('./routes/api/index')
const usersRouter = require('./routes/api/users')

const errorHandler = require('./middlewares/error_handler')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())
// app.use(cookieSession({
//   name: 'whats_node_session',
//   keys: ['dsafhajsfj'],
//   maxAge: 24 * 60 * 60 * 1000, 
// }))
app.use(session({
  secret: 'whats_node_session_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }, 
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', indexRouter)

app.use(errorHandler())

// error handler
app.use((errorHandler, req, res, next) => {
  // set locals, only providing in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  
  //render the error page
  res.status(err.status || 500)
  res.render('error')
})

// let it crush 原则
process.on('uncaughtException', (err) => {
  console.log(err)
})
process.on('unhandledRejection', (reason, p) => {
  console.log(p)
  console.log(reason)
})


module.exports = app
