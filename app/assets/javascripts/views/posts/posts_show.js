Journal.Views.PostsShow = Backbone.View.extend({

  template: JST['posts/show'],

  // events: {
  //   "click .delete": "deletePost"
  // },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }

  // deletePost: function (event) {
  //   var $target = $(event.target);
  //   var id = $target.data('id');
  //   var model = this.collection.get(id);
  //   this.collection.remove(model);
  // },
  //
  // initialize: function (options) {
  //   this.listenTo(this.collection,
  //     'remove add reset change:title', this.render)
  // }

});
