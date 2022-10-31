const Invoker = require('./Invoker');
const Db = require('./Database');
const Post = require('./Post');
const View = require('./View');
const Update = require('./Update');

const Blog = new Invoker(Db);

Blog.execute(
  new Post("My First Post", "Hello everyone, this is my first post!")
);

Blog.execute(
  new Post("About Design Patterns",
    "So, I'm building a course  on design patterns!")
);

// Blog.undo(); // will remove the last post, so only one post shows up in termainal. Commenting out this line will cause the 2 posts to show up in terminal

Blog.execute(
  new Update("My First Post", "I just updated my first post! Hey again!")
);
// Blog.undo(); // this will undo the last update operation
Blog.execute(new View());