// define constant for later user
const
  express = require('express'),			    	// require expresss framework
  compression = require('compression'),		// create compression for http responses
  path = require('path'),			        		// we need path to get the dir name
  app = express(),						          	// make an express app
  cards = require('./routes/card'),		  	// define route for card
  

// set compression for app responses
app.use(compression());

// make the public folder accessible from root
app.use(express.static(path.join(__dirname, 'public')));

// and now set my routes
app.get('/card', cards.findAll);
app.get('/card/:id', cards.findById);
app.post('/card', cards.addCard);
app.put('/card/:id', cards.updateCard);
app.delete('/card/:id', cards.deleteCard);


// ok start the server and listen on port 8080
app.listen(process.env.PORT || 8080);
