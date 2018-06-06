module.exports = function(app, db){
	app.get('/profiles', (req, res)=>{
		res.send('Hello');
	});
};