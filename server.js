var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());
app.use(express.static(__dirname + '/www'));


var server = app.listen(process.env.PORT || 3000,  function(){
  console.log('Express: listening port: ', server.address().port);
});
