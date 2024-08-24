const app = require('./app'); 

const server = app.listen(app.get('port'), () => {
	console.log(`Server started on port ${app.get('port')}`);
});

process.on('SIGTERM', () => {
	console.log('SIGTERM signal received: closing HTTP server');
	server.close(() => {
		console.log('HTTP server closed');
	});
});

