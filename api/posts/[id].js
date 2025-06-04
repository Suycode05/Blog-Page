export default function handler(req, res) {
  const posts = [{
    id: 1,
    title: "Top 5 AI Tools to Boost Productivity",
    category: "Tech",
    content: "Discover the latest AI-powered tools that help automate tasks, improve efficiency, and increase productivity in both personal and professional life.",
    image: "https://edure.in/wp-content/uploads/2025/02/ai-tools.webp"
  },
  {
    id: 2,
    title: "10 Morning Habits for a Healthier Lifestyle",
    category: "Lifestyle",
    content: "Start your day right with these scientifically backed morning habits that can elevate your mood, energy, and overall well-being.",
    image: "http://localhost:5000/images/vecteezy_balance-and-healthy-lifestyle-with-people-exercising_.jpg"
  },
  {
    id: 3,
    title: "The Future of Web Development in 2025",
    category: "Tech",
    content: "Explore upcoming trends in frontend, backend, and full-stack development — including frameworks, tooling, and performance tips.",
    image: "https://tse2.mm.bing.net/th/id/OIP.wjslWBSObcdz7RPwPzKqugHaDt?rs=1&pid=ImgDetMain"
  },
  {
    id: 4,
    title: "How to Create a Minimalist Workspace",
    category: "Lifestyle",
    content: "Transform your workspace into a calm and productive environment with minimalist design principles and clever space-saving hacks.",
    image: "https://tse1.mm.bing.net/th/id/OIP.niGCu6yFwmbGmihXM0RV-QHaHJ?rs=1&pid=ImgDetMain"
  },
  {
    id: 5,
    title: "Understanding Neural Networks with Visual Examples",
    category: "Tech",
    content: "A beginner-friendly introduction to neural networks using visual diagrams and real-world analogies to explain how they work.",
    image: "https://images.theconversation.com/files/374303/original/file-20201210-18-elk4m.jpg?ixlib=rb-1.1.0&rect=0,22,7500,5591&q=45&auto=format&w=926&fit=clip"
  },
  {
    id: 6,
    title: "7 Self-Care Rituals for a Balanced Life",
    category: "Lifestyle",
    content: "Learn daily practices that can reduce stress, improve mental clarity, and enhance your sense of well-being and purpose.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 7,
    title: "Dark Mode vs Light Mode: What Users Prefer",
    category: "Tech",
    content: "Dive into user interface research comparing dark mode vs light mode and learn which is better suited for different use cases.",
    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 8,
    title: "Healthy Eating on a Busy Schedule",
    category: "Lifestyle",
    content: "Practical tips and quick recipes to maintain a healthy diet even when you have little time to cook or plan meals.",
    image: "http://localhost:5000/images/vecteezy_balance-and-healthy-lifestyle-with-people-exercising_.jpg"
  }];
  const id = parseInt(req.query.id);
  const post = posts.find(p => p.id === id);
  post ? res.status(200).json(post) : res.status(404).json({ error: "Not found" });
}
