var app = app || {};

app.Router = Backbone.Router.extend({
    
    routes : {
      "" : "board",
      "create" : "create",
      "drop" : "drop"
    },
    
    board : function() {
      this.loadView( new app.CardsView({ collection: app.mycards }));
    },
    
    create : function() {
      this.loadView(new app.CreateView());
      $("#create").html(this.view.render().el);
    },

    loadView : function(view) {
      this.view && this.view.remove();
      this.view = view;
    }
}); 
