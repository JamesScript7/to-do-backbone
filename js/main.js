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
// var todo = new app.Todo({title: 'Test title'});
// todo.set('created_at', Date());

// Note:*** Instantiation aka instance. To instantiate is to create a new instance of an object.

// Collections are ordered sets of models (you can get and set models in the collection)
app.TodoList = Backbone.Collection.extend({
  models: app.Todo,
  localStorage: new Store("backbone-todo")
});

// New instance of a Collection:
var todoList = new app.TodoList();
todoList.create({title: 'Learn something new\'s collection', completed: false});

// Adding a new todo item:
var lmodel = new app.Todo({title: 'Learn Models', completed: true});
todoList.add(lmodel);

// You can type these in the console and it'll show:
// todoList.pluck('title');
// todoList.pluck('completed');

console.log(todoList.toJSON());
// todoList.fetch(); // if we had a server...

