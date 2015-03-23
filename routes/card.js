const
  express = require('express'),
  router = express.Router(),
  card = require('../models/card');


router.param('card_id', function(req, res, next, id) {
    req.card_item = card.find(id);
    next();
});

router.route('/').
    get(function(req, res, next) {
        var all_cards = card.getAllEntries();
         res.setHeader('Content-Type', 'application/json');
		 res.end(JSON.stringify(all_cards));
    }).
    
    post(function(req, res, next) {
       card.create( );
       res.send();
    });


router.route('/:card_id').
    get(function(req, res, next) {
        res.send( req.card_item);
    }).
    
    put(function(req, res, next) {
        res.send( req.card_item);
    }).
    
    delete(function(req, res, next) {
       card.remove( req.card_item.id );
       res.send();
    });
 

module.exports = router;
