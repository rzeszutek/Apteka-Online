'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from "./REST/routes";
import config from "./config";
const app = express();

app.use('/', express.static('public/dist/client'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connect with database established');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

routes(app);

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/dist/Client/index.html');
});

app.listen(config.port, () => {
  console.info(`Server is running at ${config.port}`)
});

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const parser = require('body-parser');
// // const path = require('path');
// // require('dotenv/config');
// // const routes = require('./REST/routes');
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import * as parser from "body-parser";
//
// const app = express();
//
// //connect to database
// const mongooseDB = async () => {
//   await mongoose.connect(process.env.DB_CONNECTION,
//     { useNewUrlParser: true });
//   console.log('Connected to database');
// }
// mongooseDB().then();
//
// //adding middleware - cors
// app.use(cors());
//
// //body-parser
// app.use(parser.json());
//
// app.use('/', express.static(path.join(__dirname, 'public/dist/client')));
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/dist/Client/index.html'));
//
// app.listen(process.env.PORT, () => {
//   console.log('Server working at port: ' + process.env.PORT)
// });
