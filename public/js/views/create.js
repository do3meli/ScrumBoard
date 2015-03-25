var app = app || {}; 

app.CreateView = Backbone.View.extend({

    template: _.template($('#create-template').html()),

    events:{
     "click #add-card":"addNewCard"
    },

    initialize: function(){
      $("#board").hide();
    },

    addNewCard:function(e){
        e.preventDefault();
		
		// get all values
        var newtitle = this.$el.find("#newTitle").val();
        var newdescription = this.$el.find("#newDescription").val();
        var newrating = this.$el.find("#newRating").val();
        var newresponsible = this.$el.find("#newResponsible").val();
               
        // create a new model, save it and go back to the overview
        var newModel = new app.cards({title:newtitle, descr:newdescription, rating:newrating, responsible:newresponsible }); 
        newModel.save({}, {url:'/card/', type: 'POST'});                 
        app.Router.navigate("", {trigger: true});
    },   

    render: function () { 
      this.$el.html(this.template());
      return this;
    }
});