const app = require('./config/app');
const port = process.env.PORT || 8000;

const server = app.listen(port, function(){
	console.log('Server listening on port '+ port);
})