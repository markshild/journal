Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/:id": "show"
  },
  initialize: function (options) {
    this.$el = $(options.el)
    this.collection = options.collection;
  },

  index: function () {
    var index = new Journal.Views.PostsIndex({ collection: this.collection});
    index.render();
    this.$el.html(index.$el);
  },

  show: function (id) {
    var post = this.collection.getOrFetch(id);
    var show = new Journal.Views.PostsShow({ model: post});
    show.render();
    this.$el.html(show.$el);
  }
});
