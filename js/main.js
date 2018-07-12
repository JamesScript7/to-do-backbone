'use strict';

// console.log('Hello World!');

var AppView = Backbone.View.extend({
  el: '#container',
  initialize: function() {
    this.render();
  },
  render: function() {
    console.log(this.el);
    this.$el.html("Hello World!");
  }
});

var appView = new AppView();
console.log('Hello World');