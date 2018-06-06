const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const dbUrl = 'mongodb://admin:admin123@ds251240.mlab.com:51240/bambu';

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

mongoose.connect(dbUrl, (err, database)=>{
	if(err) return console.log(err);
	require('./app/routes')(app, database);
	app.listen(port, ()=>{
		console.log('Server is running on port '+port);
	});
});