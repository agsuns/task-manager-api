const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
const PORT = process.env.PORT || 5001;
const connectDb = require('./db/connect');
const errorHandler = require('./middleware/errorHandler');
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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);
app.use(errorHandler);

start();
