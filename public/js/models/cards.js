var app = app || {};

app.cards = Backbone.Model.extend({

    defaults: {  
        id: null,
        title: "",
        descr: "",
        rating: "",
        responsible: "",
        stage: "todo"
    },
    
    idAttribute: "id",
    urlRoot: '/card',
    
    setState: function(newState){
      this.set({stage: newState});
    }        

    
});