var http = require('http');
var url = require('url');
var sql = require('mysql');
//Called when server first starts
// Opens connection to database and creates the listeners
function start(handle, route)
{
	var conection = mysql.createConnection({
	host : 'localhost',
	user : 'example',
	password: 'example'
	});
	//Called when a request hits the server.
	//Takes postData from the request then makes a call to the router to deal with callbacks
	function onRequest(request, response)
	{
		var postData = "";
		connection.connect();
		var pathname = url.parse(request.url).pathname;
		request.addListener("data", function(postDataChunk){
			postData+=postDataChunk;
		});
		request.addListener("end", function()
		{
			route(handle ,connection,  pathname, postData, response);
		});

	}
	http.createServer(onRequest).listen(1337);
}
exports.start = start;
