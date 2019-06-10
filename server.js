var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});


app.listen(8000, function(){
  console.log('Servidor funcionando en el puerto 8000');
});
