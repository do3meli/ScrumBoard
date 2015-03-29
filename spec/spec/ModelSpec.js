"use strict";

describe("Model", function() {
  
  var card;

  beforeEach(function() {
    card = new app.cards();
  });
  
  describe("definition tests", function() {
	 
	 it("is defined in app namespace", function() {
	   expect(app.cards).toBeDefined();
  	 });
    	  
  });
  
  
  
  describe("basic object oriented features", function() {

    it("has a id property", function() {
      expect(card.get('id')).toEqual("");
      card.set('id','2');
      expect(card.get('id')).toEqual('2');
    });

    it("has a title property", function() {
      expect(card.get('title')).toEqual("");
      card.set('title','This is a fancy test title');
      expect(card.get('title')).toEqual('This is a fancy test title');
    });
    
    it("has a descr property", function() {
      expect(card.get('descr')).toEqual("");
      card.set('descr','This is a fancy test descr');
      expect(card.get('descr')).toEqual('This is a fancy test descr');
    });
    
    it("has a rating property", function() {
      expect(card.get('rating')).toEqual("");
      card.set('rating','This is a fancy test rating');
      expect(card.get('rating')).toEqual('This is a fancy test rating');
    });
    
    it("has a responsible property", function() {
      expect(card.get('responsible')).toEqual("");
      card.set('responsible','This is a fancy test responsible');
      expect(card.get('responsible')).toEqual('This is a fancy test responsible');
    });
    
    it("has a stage property", function() {
      expect(card.get('stage')).toEqual("todo");
      card.set('stage','This is a fancy test stage');
      expect(card.get('stage')).toEqual('This is a fancy test stage');
    });
    
    it("sets default stage to 'todo' when a new object gets created" , function() {
      var card2 = new app.cards();
      expect(card2.get('stage')).toEqual("todo");
    });

    it("distinguishes objects from each other", function() {
      var card2 = new app.cards();
      expect(card2.get('title')).toEqual(card.get('title'));
      expect(card2.attributes).toEqual(card.attributes);
      card2.set('title','ok now this object has a title');
      expect(card2.get('title')).not.toEqual(card.get('title'));
      expect(card2.attributes).not.toEqual(card.attributes);
    });

  });


});