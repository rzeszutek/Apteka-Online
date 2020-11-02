const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const parser = require('body-parser');
const path = require('path');

const app = express();

const route = require('./routes/route')

const port = 3000;

//connect to database
const mongooseDB = async () => {
  await mongoose.connect('mongodb+srv://admin:mongodb@meanproject.be50c.mongodb.net/meanproject?retryWrites=true&w=majority',
    { useNewUrlParser: true });
  console.log('Connected to database');
}
mongooseDB().then();

//adding middleware - cors
app.use(cors());

//body-parser
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, 'public/dist/client')));

//server test
app.get('/*', (req, res) => res.sendFile(path.join(__dirname + 'public/dist/client/index.html')));

app.listen(port, () => {
  console.log('Server working at port: ' + port)
});
