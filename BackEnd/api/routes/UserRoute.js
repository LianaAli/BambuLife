module.exports = function(app){
	var userList = require('../controllers/UserController');

	app.route('/api/users')
		.get(userList.all)
		.post(userList.create);

	app.route('/api/users/:userId')
		.get(userList.one)
		.put(userList.update)
		.delete(userList.delete);
};