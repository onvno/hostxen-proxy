var proxy = require('express-http-proxy'); 
var app = require('express')(); 
app.use('/proxy', proxy('www.google.com'));

app.listen(3999, function () {
  console.log('Example app listening on port 3999!');
});