const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const clientRouter = require('./Routes/clientsRouter');

const app = express();


app.use(cors({
  origin: 'https://salon-booking-app-vert.vercel.app/' 
}));


app.use(morgan('dev'));


app.use(express.json());


app.use('/api/v1/clients', clientRouter);


app.get('/test', (req, res) => {
  res.send('Server is working');
});


app.use((req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Cannot find ${req.originalUrl} on this server`
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong on the server'
  });
});

module.exports = app;
