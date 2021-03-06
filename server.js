var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());
app.use(express.static(__dirname + '/www'));
app.use(express.static(__dirname + '/build'));

express.static.mime.define({'text/css': ['cgz']});
express.static.mime.define({'text/javascript': ['jgz']});


var server = app.listen(process.env.PORT || 3000,  function(){
  console.log('Express: listening port: ', server.address().port);
});
