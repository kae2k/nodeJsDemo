var http = require('http');
var url = require('url');
var sql = require('mysql');
function start(handle, route)
{
	var conection = mysql.createConnection({
	host : 'localhost',
	user : 'example',
	password: 'example'
	});
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
