var app = app || {};

app.board = Backbone.Collection.extend({
	
  	model: app.cards,
  	url: '/card'
  	
});