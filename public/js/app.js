var app = app || {};

$(function() {
  
  // create collection
  app.mycards = new app.board();
   
 
  
  // initialize the router
  app.Router = new app.Router();
  Backbone.history.start();
  
 
  // define drop areas and callback function for drag&drop 
  $("#board div").droppable( {      
    hoverClass: 'hovered',
	drop: handleCardDrop
  });

  // drag and drop callback
  function handleCardDrop( event, ui ) {
   
    var cardNewState = $(event.target).attr('id');       
    var cardId = $(ui.draggable).attr("id");
    
    console.log("you moved card with id " + cardId + " to " + cardNewState);
        
    // now save it to the server 
    var card = app.mycards.where({ id: cardId })[0];
    card.save({stage: cardNewState}, {url:'/card/'+cardId, type: 'PUT'});
  }
    
});

