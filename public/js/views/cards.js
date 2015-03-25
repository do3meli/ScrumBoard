var app = app || {};

// View for all people
app.CardsView = Backbone.View.extend({
  
  render: function(){
	  
	$("#board div").droppable( {      
    hoverClass: 'hovered',
	drop: handleCardDrop
	
  });
	  
  },
  
  addCardView: function(item){
	 var myCardView = new app.CardView({ model: item });
	
	 // render the model instance to whatever class is in the stage attribute from the model
	 var myRenderedElement = $(myCardView.render().el);
	 myRenderedElement.attr("id",item.get("id"));
	 myRenderedElement.draggable({ containment: "#board" });
	 
	 
	 	 
	 $('#' + item.get('stage')).append(myRenderedElement);
  },
 
  // this function is getting called when NEW object is getting created
  initialize: function(){

  	 // fetch the data from the server
	 this.collection.fetch({ reset: true });
	 // subscribe to the reset command adn call addAll when above cmd is finished
	 this.listenTo(this.collection,'reset',this.addAll);
  },
  
  addAll: function(){
	  // iterate over the whole collection
	  this.collection.each( this.addCardView, this); 
  }
 
});

// The View for a Person
app.CardView = Backbone.View.extend({
  
  // the template is in the index.html defined
  template: _.template( $('#card-template').html()),

  initialize: function(){},
  
  render: function(){
      this.$el.html( this.template(this.model.toJSON()));
      this.$el.addClass("card-item");
      return this;
  }
  
});
