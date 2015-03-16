// define constant for later user
const
  express = require('express'),			// require expresss framework
  compression = require('compression'),		// create compression for http responses
  app = express();				// make an express app

// set compression for app responses
app.use(compression());

// this defines what happens if the root directory is called
app.get('/', function(request, response) {
  response.send("hello");
});

// ok start the server and listen on port 8080
app.listen(process.env.PORT || 8080);

