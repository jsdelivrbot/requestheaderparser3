var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var useragent = require('express-useragent')
app.set('port', (process.env.PORT || 5000));

//create an instance of expression
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());
app.use(useragent.express());
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var api = '/api/whoami'

app.get('/', function(request, response) {
  console.log('300');
  response.render('pages/index.ejs');
});

app.get(api, function(request, response){
  var language = "en";
  var software = "OS: " + request.useragent.os + ", Browser: " + request.useragent.browser;
  var ipaddress = request.ip;

  response.json({'ipaddress': ipaddress, 'software': software, 'language':language})
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  console.log("200");
});
