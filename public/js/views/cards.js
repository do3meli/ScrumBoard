var app = app || {};

app.CardsView = Backbone.View.extend({
  
  el: '#book-list',
  template: _.template($('#book-template').html()),

  render : function() {
    //this.el.innerHTML = this.template(this.model.toJSON());
      app.mycards.each(this.$el.html("Hello World"));
    return this;
  }
  
  /*el: $('#book-list'),
  
  render: function() { app.mycards.each(this.addBook, this); },
  
  addBook: function(book) {
    var bookView = new CardsView({ model: book });
	    this.$el.append(cardsView.render().el);
  }*/
});

