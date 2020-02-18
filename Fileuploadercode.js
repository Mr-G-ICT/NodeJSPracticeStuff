//library requirement uploads
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function(req, res){

//if statement that deals with the file upload
if(req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files){

	//variables to load the file, this has to happen here due to nature of form load. v similar to PHP upload function		
	var oldpath= files.filetoupload.path;
	var newpath = 'c:/Users/bgris/nodejspractice/' + files.filetoupload.name;
	
	//exception handler incase something goes wrong
	fs.rename(oldpath, newpath, function(err){
	   if(err) throw err;
	   res.write('file uploaded');
	   res.end();
	
	});
});

}else {
	//form to upload the file.
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	res.write('<input type="file" name="filetoupload">');
	res.write('<input type="submit">');
	res.write('</form>');
	return res.end();
}

}).listen(8080);