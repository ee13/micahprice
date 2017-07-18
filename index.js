var express = require('express'); 
var path = require('path');
var app = express();

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/lib', express.static(__dirname + '/lib'));

app.listen(3000);

console.log("Running on 3000")