const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	questions: [{
		name: String,
		answer: Number
	}]
});

module.exports = mongoose.model('User', UserSchema);

/*
EXAMPLE BODY STRUCTURE FOR POSTMAN
----------------------------------
{
	name: "Liana Ali",
	questions: [{
		name: "Saving Amount",
		answer: 10000
	}, {
		name: "Loan Amount",
		answer: 2000
	}]
}
*/