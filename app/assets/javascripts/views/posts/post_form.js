Journal.Views.PostsForm = Backbone.View.extend({

  template: JST['posts/form'],

  events: {
    "submit .post-form": "updatePost"
  },

  render: function (errors) {
    var content = this.template({post: this.model, errors: errors});
    this.$el.html(content);
    return this;
  },

  updatePost: function (event) {
    event.preventDefault();

    var $target = $(event.target)
    var attributes = $target.serializeJSON();

    this.model.save(attributes.post, {
      success: function () {
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate("posts", {trigger: true});
      }.bind(this),
      error: function (modul, resp) {
        this.render(resp.responseJSON.errors);
      }.bind(this)
    });
  },

  initialize: function (options) {

  }

  });
