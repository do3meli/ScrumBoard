var app = app || {};

$(function() {
  
  // create collection
  app.mycards = new app.board();
   
  // create view and give it the collection 
  var cardsView = new app.CardsView({
  	collection: app.mycards
  });
 
  $("#board div").droppable( {      
    hoverClass: 'hovered',
	drop: handleCardDrop
  });

  function handleCardDrop( event, ui ) {
   
    var cardNewState = $(event.target).attr('id');       
    var cardId = $(ui.draggable).attr("id");
    
    console.log("you moved card with id " + cardId + " to " + cardNewState);
        
    // now save it to the server 
    var card = app.mycards.where({ id: cardId })[0];
    card.save({stage: cardNewState}, {url:'/card/'+cardId, type: 'PUT'});
  }
    
});

