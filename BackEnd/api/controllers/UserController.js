var User = require('../models/User');

exports.all = function(req, res){
	User.find({}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
}

exports.create = function(req, res){
	var newUser = new User(req.body);
	var score = 0, result = "";
	newUser.save(function(err, user){
		if(err) res.send(err);
		else{
			(newUser.questions).forEach(function(question){
				switch(question.name){
					case "Saving Amount":
						switch(question.answers){
							case 0:
								score += 6;
								break;
							case 2000:
								score += 5;
								break;
							case 4000:
								score += 4;
								break;
							case 6000:
								score += 3;
								break;
							case 8000:
								score += 2;
								break;
							case 10000:
								score += 1;
								break;
						}
						break;
					case "Loan Amount":
						switch(question.answers){
							case 0:
								score += 1;
								break;
							case 2000:
								score += 2;
								break;
							case 4000:
								score += 3;
								break;
							case 6000:
								score += 4;
								break;
							case 8000:
								score += 5;
								break;
							case 10000:
								score += 6;
								break;
						}
						break;
				}
			});

			if(score>=8){
				result = "A";
			}
			else if(score>=6){
				result = "B";
			}
			else if(score>=4){
				result = "C";
			}
			else if(score>=2){
				result = "D";
			}
		}
		
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