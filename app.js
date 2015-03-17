// define constant for later user
const
  express = require('express'),				// require expresss framework
  compression = require('compression'),		// create compression for http responses
  app = express(),							// make an express app
  routes = require('./routes/index'),		// define default route
  cards = require('./routes/card'),			// define route for card
  path = require('path');					// we need path to get the dir name

// set compression for app responses
app.use(compression());

// make the public folder accessible from root
app.use(express.static(path.join(__dirname, 'public')));

// set jade as our view engine and define ./views directory as source
app.set('view engine', 'jade');
app.set('views', './views');

// and now set my routes
app.use('/', routes);
app.use('/card', cards);

// ok start the server and listen on port 8080
app.listen(process.env.PORT || 8080);

