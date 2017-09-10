var express = require('express');
var app = express();
var cors = require('cors');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(cors());
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var api = 'api/whoami'

app.get('/', function(request, response) {

  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
