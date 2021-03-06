const express = require('express')
const cors = require('cors')
const app = express()
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')
const unitRouter = require('./routes/unit')
const errorHandler = require('./middlewares/error')

app.use(cors())

app.use(express.json())

app.use('/', authRouter)

app.use('/api/users', userRouter)

app.use('/api/tasks', taskRouter)

app.use('/api/units', unitRouter)

app.get('/', (req, res) => {
  res.send('Welcome to doubtfirebot scraper!')
})

app.use(errorHandler)

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'route not found on this server'
  })
})

module.exports = app
