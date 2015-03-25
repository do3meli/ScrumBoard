// this is my board
var Board = {
    
    // our cards array where we store everything
    cards: [
        {
            id: "1",
            title: "foo",
            descr: "description 1",
            rating: "2",
            responsible: "test person 1",
            stage: "todo"
        },
        
        {
            id: "0",
            title: "bar",
            descr: "description 2",
            rating: "1",
            responsible: "test person 2",
            stage: "done"
        },
        
        {
            id: "2",
            title: "bar",
            descr: "description 3",
            rating: "1",
            responsible: "test person 3",
            stage: "inprogress"
        }
        
    ],
    
    // last id is set to 1 when initiated
    last_id: 2,
	
	// function to generate the next id
    getNextId: function () {
        this.last_id += 1;
        return this.last_id;
    },
	
	// JavaScript doesn't have a real clone function
    // This is good enough for simple, data-only objects
    clone: function (data) {
        return JSON.parse(JSON.stringify(data));
    },
	
	// add a new card to the cards array
	// poor mans 'dup' (ruby), otherwise we will be modifying the original object
    add: function (data) {
        var data = this.clone(data);
        var id = this.getNextId();
        data.id = id.toString();
        this.cards.push(data);
        console.log("added new card with id " + id);
        return data;
    },
	
	// find a specific card by the given id
    find: function (id) {
        for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id == id) {
                return this.cards[i];
            }
        }
        return void 0;
    },
	
	// remove a specific card by the given id
    remove: function (id) {
        for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id == id) {
                var p = this.cards[i];
                this.cards.splice(i, 1);
                return p;
            }

        }
        return void 0;
    },
	
	// return an array with all cards
    allPosts: function () {
        return this.cards;
    },
	
	// clear all entries in the cards array
    clearAllEntries: function () {
        this.cards = [];
        this.last_id = 0;
    },
    
    // used to update all values
    updateCard: function(id,data){
    	for (var attr in data) {
			console.log('updating card id ' + id + " will set " + attr + " = " + data[attr]);
			this.cards[id][attr] = data[attr];
		}
		return this.cards[id];		
    }	    
	     
};


// below export everything
exports.cards = Board;

exports.getAllEntries = function () {
    return Board.allPosts();
};

exports.clearAllEntries = function () {
    return Board.clearAllEntries();
};

exports.updateCard = function (id,data){
	return Board.updateCard(id,data);
};

exports.create = function (data) {
    return Board.add(data);

};

exports.find = function (id) {
    return Board.find(id);
};

exports.remove = function (id) {
    return Board.remove(id);
}