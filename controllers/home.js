const path = require('path');
const homePage = 'index.html';
const Task = require('../models/Task');

const homeGet = (req, res) => {
  res.sendFile(path.resolve(homePage));
};

const homePost = async(req, res) => {
  const { name, age } = req.body;
  const task = await Task.create({
    name,
    age: Number.parseInt(age),
  });
  res.status(201).send('Data Received');
};

module.exports = {
  homeGet,
  homePost,
};
