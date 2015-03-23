var app = app || {};

// View for all people
app.CardsView = Backbone.View.extend({
  
  el: $('#todo ul'),
  render: function(){},
  
  addCardView: function(item){
	  var myCardView = new app.CardView({ model: item });
	  this.$el.append(myCardView.render().el);
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
  
  tagName: 'li',
  template: _.template( $('#book-template').html()),

  initialize: function(){
      //this.render();
      console.log(this.model);
  },

  render: function(){
      this.$el.html( this.template(this.model.toJSON()));
      return this;
  }
  
});
