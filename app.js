const express = require('express');
const home = require('./routes/home');
const { connectDB } = require('./db/connect');
require('dotenv').config();

const app = express();

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));

app.use('/', home);

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('server running at port: '+port);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
