var sql = require(sql);
// Called on page load to populate subject list
function onLoad(connection, postData, response)
{
	connection.query('SELECT subject FROM classDB', function(error, rows, feilds){
		if(error)
		{
			throw error;
		}
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(rows);
		response.end();
	});
}
//Called when the user first selects a subject
function subjectExpand(connection, postData, response)
{
	connection.query('SELECT classID FROM classDB WHERE subject == ?', [postData["subject"]], function(error, rows, feilds){
		if(error)
		{
			throw error;
		}
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(feilds);
		response.end();
	});
}
//Called when a user first selects a class
function classExpand(connection, postData, response)
{
	connection.query('SELECT section FROM classDB WHERE subject == ? AND classID == ?', [postData["subject"], postData["classID"]], function(error, rows, feilds){
		if(error)
		{
			throw error;
		}
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(feilds);
		response.end();
	});
}
//Called when a user first selects a section
function sectionExpand(connection, postData, response)
{
	connection.query('SELECT slotsOpen, slotsTotal, teacher, time, room FROM classDB WHERE subject == ? AND classID == ? AND section == ?',
	 [postData["subject"], postData["classID"], postData["section"]],
	 function(error, rows, feilds){
	 	if(error)
	 	{
	 		throw error;
	 	}
	 	response.writeHead(200, {"Content-Type" : "text/plain"});
	 	response.write(feilds);
	 	response.end();
	 });
}
exports.onLoad = onLoad;
exports.subjectExpand = subjectExpand;
exports.classExpand = classExpand;
exports.sectionExpand = sectionExpand;
