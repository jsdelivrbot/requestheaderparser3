var express = require('express');
var app = express();
var cors = require('cors');
//var bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 5000));

//create an instance of expression
app.use(express.static(__dirname + '/public'));
app.use(cors());
//app.use(bodyParser.json());
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
