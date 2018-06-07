var User = require('../models/User');

exports.all = function(req, res){
	User.find({}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
}

exports.create = function(req, res){
	var newUser = new User(req.body);
	var result = "";
	newUser.save(function(err, user){
		if(err) res.send(err);
		else result = getProfile(newUser.questions);
		
		res.send("Profile type for "+user.name+" is "+result+".");
	});
}

exports.one = function(req, res){
	User.findById(req.params.userId, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
}

exports.update = function(req, res){
	User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
}

exports.delete = function(req, res){
	User.findByIdAndRemove(req.params.userId, function(err, user){
		if(err) res.send(err);
		res.json({ message: user.name + ' successfully deleted!' });
	})
}

var getScore = function(questions){
	var score = 0, amountList = [0, 2000, 4000, 6000, 8000, 10000];

	questions.forEach(function(question){
		switch(question.name){
			case "Saving Amount":
				amountList.sort((a,b)=>a-b);
				break;
			case "Loan Amount":
				amountList.sort((a,b)=>b-a);
				break;
		}
		score += (amountList.indexOf(question.answer)+1);
	});

	return score;
}

var getProfile = function(questions){
	var score = getScore(questions);

	if(score>=8){
		return "A";
	}
	else if(score>=6){
		return "B";
	}
	else if(score>=4){
		return "C";
	}
	else if(score>=2){
		return "D";
	}
}