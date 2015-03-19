var app = app || {};

$(function() {
  
  app.mycards = new app.board();

  app.mycards.fetch();
   
  var cardsView = new app.CardsView({
  	model: app.mycards
  });
 
  cardsView.render(); 
  
});

