"use strict";

describe("Collection", function() {
  
  var collection;

  beforeEach(function() {
    collection = new app.board();
  });
  
  describe("definition tests", function() {
	 
	 it("is defined in app namespace", function() {
	   expect(app.board).toBeDefined();
  	 });
  	 
     it("uses the card model", function () {
       expect(collection.model).toEqual(app.cards);
     });
  
     it("url is 'card'", function () {
       expect(collection.url).toEqual("/card");
     });
  	 
  	 
    	  
  });
  
  describe("server logic", function(){
	 
     beforeEach(function(done) {
       collection.fetch({
	       success: function(){
	         done();
	       }
       });
     });
      
	 
	 it("fetch method should fill collection with models from the server",function (){
        expect(collection.models.length).not.toEqual(0);
        expect(collection.models.length).toBeGreaterThan(0);	 
     });
	  
  });

});