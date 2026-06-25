# Chronicle 📝

A full-stack CRUD blog built with Node.js, Express, and EJS — my capstone project for learning backend web development.

## Features

- Full CRUD: create, read, update, and delete blog posts
- Clean, minimal UI with custom typography (Cormorant Garamond, Playfair Display, Inter)
- Responsive layout for mobile and desktop
- Delete confirmation to prevent accidental data loss
- Custom 404 page for missing posts
- Empty state when no posts exist

## Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Styling:** Plain CSS (no frameworks)

## Routes

| Method | Route               | Description           |
| ------ | ------------------- | --------------------- |
| GET    | `/`                 | View all posts        |
| GET    | `/posts/:id`        | View a single post    |
| GET    | `/posts/new`        | Form to create a post |
| POST   | `/posts`            | Create a new post     |
| GET    | `/posts/:id/edit`   | Form to edit a post   |
| POST   | `/posts/:id`        | Save edited post      |
| POST   | `/posts/:id/delete` | Delete a post         |

## Running Locally

\`\`\`bash
git clone https://github.com/Sahil-Build/blog-posts.git
cd blog-posts
npm install
node index.js
\`\`\`

Then visit `http://localhost:8080` in your browser.

## What I Learned

Building this project helped me understand the full request-response cycle in Express — how routes map to views, how forms send data via POST, and how server-side rendering with EJS works end to end. It also gave me a chance to design and implement a complete UI from scratch, including responsive layouts and small UX details like confirmation dialogs and empty states.

---

Made with ❤️ by [Sahil](https://github.com/Sahil-Build)
