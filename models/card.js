// This is a Card model

var Card = {
    
    posts: [
        {
            id: '1',
            title: 'foo',
            text: 'bar',
            publishedAt: new Date()
        }
    ],
    
    last_id: 1,

    getNextId: function () {
        this.last_id += 1;
        return this.last_id;
    },

    clone: function (data) {
        // JavaScript doesn't have a real clone function
        // This is good enough for simple, data-only objects
        return JSON.parse(JSON.stringify(data));
    },

    add: function (data) {
        // poor mans 'dup' (ruby), otherwise we will be modifying the original object
        var data = this.clone(data);
        var id = this.getNextId();
        data.id = id;
        data.publishedAt = new Date();
        this.posts.push(data);
        return data;
    },

    find: function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == id) {
                return this.posts[i];
            }
        }
        return void 0;
    },

    remove: function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == id) {
                var p = this.posts[i];
                this.posts.splice(i, 1);
                return p; // remove element and return it
            }

        }
        return void 0;
    },

    allPosts: function () {
        return this.posts;
    },

    clearAllEntries: function () {
        this.posts = [];
        this.last_id = 0;
    }
};

exports.Card = Card;

exports.getAllEntries = function () {
    return card.allPosts();
};

exports.clearAllEntries = function () {
    return card.clearAllEntries();
};



exports.create = function (data) {
    return Blog.add(data);

};

exports.find = function (id) {
    return Blog.find(id);
};

exports.remove = function (id) {
    return Blog.remove(id);
}

