Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit"
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
  },

  edit: function (id) {
    var post = this.collection.getOrFetch(id);
    var form = new Journal.Views.PostsForm({ model: post});
    form.render();
    this.$el.html(form.$el);
  },

  new: function () {
    var post = new Journal.Models.Post();
    var form = new Journal.Views.PostsForm({model: post, collection: this.collection});
    form.render();
    this.$el.html(form.$el);
  }
});
