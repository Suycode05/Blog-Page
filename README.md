📝 Mini Blog Platform
A simple full-stack blog platform where users can view posts, filter by category, and read individual articles. Built with a modern tech stack and designed for learning and rapid prototyping.

🔧 Tech Stack
Frontend
Framework: React (can be swapped with Vue or Vanilla JS as needed)

Features:

View all blog posts

Filter posts by category

Read individual blog articles

Clean and responsive UI

Backend
Server: Node.js with Express

API Endpoints:

GET /posts – fetch all blog posts

GET /posts/:id – fetch a single post by ID

GET /posts?category=Tech – filter posts by category

Database
Simulated using:

MongoDB (recommended for scalable solutions)

OR a simple JSON file for quick setups

🚀 Getting Started
1. Clone the repository:-
git clone https://github.com/Suycode05/Blog-Page.git

2. Install dependencies
# Install server dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

3. Start the development servers
For backend (Express):

cd server
npm run dev

For frontend (React):

cd ../client
npm start
📁 Project Structure
bash
Copy
Edit
Blog-Page/
├── src/              # Frontend (React)
│    ├── Home.jsx/
│    ├── CreatePost/
│    └── App.jsx
├── server/              # Backend (Node.js + Express)
│   ├── routes/
│   ├── controllers/
│   └── data/posts.json  # Simulated DB (if not using MongoDB)
└── README.md
🔌 API Overview
Method	Endpoint	Description
GET	/posts	Get all blog posts
GET	/posts/:id	Get a single post by ID
GET	/posts?category=x	Filter posts by category

🖼️ UI Preview
(Optional - add screenshots or gifs showcasing the UI)

🛠️ Future Enhancements
Add user authentication

Enable post creation/editing from frontend

Integrate a WYSIWYG editor

Add comment functionality