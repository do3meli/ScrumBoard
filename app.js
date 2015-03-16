// define constant for later user
const
  express = require('express'),			// require expresss framework
  app = express();				// make an express app

// this defines what happens if the root directory is called
app.get('/', function(request, response) {
  response.send("hello");
});

// ok start the server and listen on port 8080
app.listen(process.env.PORT || 8080);

