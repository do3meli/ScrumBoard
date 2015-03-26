var app = app || {};

app.Router = Backbone.Router.extend({
    
    routes : {
      "" : "board",
      "create" : "create",
      "edit/:card_id" : "edit",
      "drop/:card_id" : "drop"
    },
    
    board : function() {
      this.loadView( new app.CardsView({ collection: app.mycards }));
    },
    
    create : function() {
      this.loadView(new app.CreateView());
      $("#create").html(this.view.render().el);
    },
    
    drop: function(card_id){
	 app.mycards.where({ id: card_id })[0].destroy();
	 app.Router.navigate("", {trigger: true});
    },
    
    edit: function(card_id){
	 console.log("i will edit you " + card_id);
	  
	 var card = app.mycards.where({ id: card_id })[0];
	 console.log(card);
	 this.loadView(new app.EditView({ model: card }));
     $("#edit").html(this.view.render().el);
    },

    loadView : function(view) {
      this.view && this.view.remove();
      this.view = view;
    }
}); 
