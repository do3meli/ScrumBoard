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
        res.render('card/index', { cards: all_cards });
    });

router.route('/new').
    get(function(req, res, next) {
        res.render('card/new');
    }).
    
    post(function(req, res, next) {
       card.create( { title: req.body.title, text: req.body.text } );
       res.redirect('/card');
    });
    
    
router.route('/:card_id').
    get(function(req, res, next) {
        res.render('card/show', { card: req.card_item });
    });
 
router.route('/:card_id/delete').
    post(function(req, res, next) {
       card.remove( req.card_item.id );
       res.redirect('/card');
    });
   
    

module.exports = router;