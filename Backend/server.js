const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
// eslint-disable-next-line prettier/prettier
dotenv.config({path : './config.env'}) 



const DB = process.env.DATABASE;
console.log(DB)
mongoose
  .connect(DB)
  .then(() => console.log('DB connected successfully'))
  .catch((err) => console.log('There was a database connection error:', err));

// console.log(process.env)

//creating a new document out of the tour model

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
