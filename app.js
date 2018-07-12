const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const errorHandler = require('./middlewares/error_handler')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

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

throw new Error('catch me ...')


module.exports = app
