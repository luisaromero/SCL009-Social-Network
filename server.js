var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));   //busca primero en src

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html'); //busca luego dentro de src el index
});

app.listen(3000, function(){                    //
  console.log('Server Express Ready!');
});


// para usar el local host