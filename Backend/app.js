const express = require('express')
const morgan = require('morgan')
const clientRouter = require('./Routes/clientsRouter')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())


app.use('/api/v1/clients',clientRouter)

app.get('/test', (req, res) => {
  res.send('Server is working');
});

module.exports = app;