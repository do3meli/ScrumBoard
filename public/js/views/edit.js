var app = app || {}; 

app.EditView = Backbone.View.extend({
	
    template: _.template($('#create-template').html()),

    events:{
     "click #add-card":"changeCard"
    },

    initialize: function(){
      $("#board").hide();
    },

    changeCard:function(e){
        //e.preventDefault();
		
		
		// get all values
        var newtitle = this.$el.find("#newTitle").val();
        var newdescription = this.$el.find("#newDescription").val();
        var newrating = this.$el.find("#newRating").val();
        var newresponsible = this.$el.find("#newResponsible").val();
               
		// save it and redirect to the board
		this.model.save({title:newtitle, descr:newdescription, rating:newrating, responsible:newresponsible }, {url:'/card/'+this.model.get('id'), type: 'PUT'});            
        app.Router.navigate("", {trigger: true});
    },   

    render: function () { 
      this.$el.html(this.template());
      return this;
    }
});