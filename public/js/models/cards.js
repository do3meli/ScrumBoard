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
    
    
});