// define constant for later user
const
  express = require('express'),			    	// require expresss framework
  compression = require('compression'),		// create compression for http responses
  path = require('path'),			        		// we need path to get the dir name
  app = express(),						          	// make an express app
  cards = require('./routes/card'),		  	// define route for card
  bodyParser = require('body-parser');		// needed to parse put/delete requests

// set compression for app responses
app.use(compression());

// parse application/json
app.use(bodyParser.json());

// make the public folder accessible from root
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'spec')));

// and now set my routes
app.use('/card', cards);

// ok start the server and listen on port 8080
app.listen(process.env.PORT || 8080);
