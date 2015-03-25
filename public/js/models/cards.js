var app = app || {};

app.cards = Backbone.Model.extend({

    defaults: {  
        id: "",
        title: "",
        descr: "",
        rating: "",
        responsible: "",
        stage: "todo"
    },
    
    idAttribute: "id",
    urlRoot: '/card',
    
    // i have this save method so that only the attributes given by http request are saved, instead of all attributes
    save: function (attrs, options) { 
    	attrs = attrs || this.toJSON();
		options = options || {};

		// If model defines serverAttrs, replace attrs with trimmed version
		if (this.serverAttrs) attrs = _.pick(attrs, this.serverAttrs);

		// Move attrs to options
		options.attrs = attrs;

		// Call super with attrs moved to options
		Backbone.Model.prototype.save.call(this, attrs, options);
	}
    
    
});