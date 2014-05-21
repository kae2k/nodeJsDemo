var server = require("./server");
var router = require("./route");
var handlers = require("./handlers");
var handle = {};
handle[''] = handlers.onLoad;
handle['subjectExpand'] = handlers.subjectExpand;
handle['classExpand'] = handlers.classExpand;
handle['sectionExpand'] = handlers.sectionExpand;
server.start(handle, router.route);
