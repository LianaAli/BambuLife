const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	questions: [{
		name: String,
		answers: Number
	}]
});

module.exports = mongoose.model('User', UserSchema);

/*
PROPOSED USER SCHEMA
--------------------
{
	name: "Liana Ali",
	questions: [{
		name: "Saving Amount",
		answers: 10000
	}, {
		name: "Loan Amount",
		answers: 2000
	}]
}

PROPOSED QUESTIONS SCHEMA
-------------------------
{
	questions: [{
		name: "Saving Amount",
		answers: [{
			name: 0, score: 0
		}, {
			name: 2000, score: 1
		}, {
			name: 4000, score: 2
		}, {
			name: 6000, score: 3
		}, {
			name: 8000, score: 4
		}, {
			name: 10000, score: 5
		}]
	}, {
		name: "Loan Amount",
		answers: [{
			name: 0, score: 5
		}, {
			name: 2000, score: 4
		}, {
			name: 4000, score: 3
		}, {
			name: 6000, score: 2
		}, {
			name: 8000, score: 1
		}, {
			name: 10000, score: 0
		}]
	}]
}

PROPOSED PROFILE SCHEMA
-----------------------
{
	profile: [{
		name: "A", score: "8"
	}, {
		name: "B", score: "6"
	}, {
		name: "C", score: "4"
	}, {
		name: "D", score: "2"
	}]
}
*/