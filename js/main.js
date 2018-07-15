'use strict';

var AppView = Backbone.View.extend({
  el: '#container',
  initialize: function() {
    this.render();
  },
  template: _.template("<h1>Hello <%= who %> from View!</h1>"),
  render: function() {
    this.$el.html(this.template({ who: "World"}));
  }
});

// el - Every View has an element that is basically
// an injection point.

// inititialize - First function that executes
// in the view when it's instantiated.

// _.template is so we can dynamically insert data:
// <%= %> escapes the HTML
// <%- %> doesn't escape the HTML for stuff like partials: include();
// <% %> to use JS

// render - Using jQuery inside, set html to the template string.

// $el - cached jQuery object? We can use jQuery functions
// to push content

var appView = new AppView(); // You need to create new instance of view to activate it.

var app = {}; // creating a namespace

// I believe each backbone model needs to be capitalized.
// defaults will be available in every instance!
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

// I believe same way with Views, you need to create a new instance to activate it.
var test = new app.Todo({title: 'Test title'});
test.set('created_at', Date());

// Note: Instantiation aka instance. To instantiate is to create a new instance of an object.

