const  express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB.js');

'use strict';



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();
app.get('/', (req, res) => {
    res.send('Hello I am IT19091358 T.A.N.Hansika');
  });
  

//mongoose.Promise = global.Promise;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//connect to database
mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {console.log('Database is now conneted')},
    err => {console.log('cannot connect to database' + err)}
);


app.use('/employee',require('./Routes/employee-route'));
app.use('/get',require('./Routes/employee-route'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);