require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    // perform a database connection when server starts
    console.log(`Server is running on port: ${port}`);
  });
  