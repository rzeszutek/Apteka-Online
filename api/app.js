const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');
require('dotenv/config');

const app = express();

//connect to database
const mongooseDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true });
  console.log('Connected to database');
}

mongooseDB().then();

//adding middleware - cors
app.use(cors());

//body-parser
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, 'public/dist/client')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/public/dist/Client/index.html')));

app.listen(process.env.PORT, () => {
  console.log('Server working at port: ' + process.env.PORT)
});
