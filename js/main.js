'use strict';

var AppView = Backbone.View.extend({
  el: '#container',
  initialize: function() {
    this.render();
  },
  template: _.template("<h1>Hello <%= who %>!</h1>"),
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

var appView = new AppView();
console.log('Hello World');