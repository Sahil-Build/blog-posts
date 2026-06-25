const express = require("express");
const app = express();
let posts = [
  {
    id: 1,
    title: "Why I Started This Blog",
    content:
      "I built Chronicle as my capstone project while learning full-stack web development — Node.js, Express, and EJS, to be specific. It's a simple CRUD blog, but every part of it (the routing, the templating, even this default post you're reading) was written and understood from scratch, not copy-pasted.\n\nThe goal was never just to make something that works. It was to actually understand why it works — how routes connect to views, how forms send data, how a delete button quietly removes one item from an array. This project is the proof of that.",
  },
  {
    id: 2,
    title: "What's Next",
    content:
      "With the backend and frontend both done, the next steps are sharpening my DSA fundamentals, polishing a portfolio of projects like this one, and preparing for technical interviews.\n\nLong-term, I'm aiming for a remote web development role — ideally somewhere that lets me keep learning in public and eventually fund a bit of travel along the way. Japan's at the top of that list.\n\nThanks for stopping by Chronicle.",
  },
];

const port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log("server is running on port:", port);
});

app.get("/", (req, res) => {
  res.render("homepage", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("newPost");
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(function (p) {
    return p.id == req.params.id;
  });

  if (!post) {
    return res.status(404).render("404");
  }

  res.render("posts", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(function (p) {
    return p.id == req.params.id;
  });
  res.render("editpost", { post: post });
});

app.post("/posts", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  let newPost = { id: posts.length + 1, title: title, content: content };
  posts.push(newPost);
  res.redirect("/");
});

app.post("/posts/:id", (req, res) => {
  const post = posts.find(function (p) {
    return p.id == req.params.id;
  });
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter(function (p) {
    return p.id != req.params.id;
  });
  res.redirect("/");
});
