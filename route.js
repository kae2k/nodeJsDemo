function route(handle, connection, pathname, getData, response)
{
	if( typeof handle[pathname] === 'function')
	{
 		handle[pathname](connection, getData, response);
	}
	else
	{
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write("404 not found");
		response.end();
	}
}
exports.router = route;