const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const PORT = process.env.PORT || 5001;
const connectDb = require('./db/connect');
require('dotenv').config();

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    console.log('Server has connected to the db successfully!');

    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (err) {
    console.log('Something wrong happened. Try it again.');
  }
};

app.use('/api/v1/tasks', tasksRouter);

start();
