export default function handler(req, res) {
  const posts = [{
    id: 1,
    title: "Top 5 AI Tools to Boost Productivity",
    category: "Tech",
    content: "Discover the latest AI-powered tools that help automate tasks, improve efficiency, and increase productivity in both personal and professional life.",
    image: "./public/ai-tools.webp"
  },
  {
    id: 2,
    title: "10 Morning Habits for a Healthier Lifestyle",
    category: "Lifestyle",
    content: "Start your day right with these scientifically backed morning habits that can elevate your mood, energy, and overall well-being.",
    image: "https://medicircle.in/uploads/2021/march2021/top-3-life-hacks-you-must-follow-lifestyle-management-tips.jpg"
  },
  {
    id: 3,
    title: "The Future of Web Development in 2025",
    category: "Tech",
    content: "Explore upcoming trends in frontend, backend, and full-stack development — including frameworks, tooling, and performance tips.",
    image: "http://localhost:5000/top-web-development-trends.webp"
  },
  {
    id: 4,
    title: "How to Create a Minimalist Workspace",
    category: "Lifestyle",
    content: "Transform your workspace into a calm and productive environment with minimalist design principles and clever space-saving hacks.",
    image: "https://images.unsplash.com/photo-1516382799247-7e8e8db7d7e7?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    title: "Understanding Neural Networks with Visual Examples",
    category: "Tech",
    content: "A beginner-friendly introduction to neural networks using visual diagrams and real-world analogies to explain how they work.",
    image: "https://images.unsplash.com/photo-1581092333703-22002b2f6c29?auto=format&fit=crop&w=800&q=60"
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
    image: "https://images.unsplash.com/photo-1532634726-8b9fb99825c7?auto=format&fit=crop&w=800&q=60"
  }]; // your post data
  const { category } = req.query;
  const filtered = category ? posts.filter(p => p.category === category) : posts;
  res.status(200).json(filtered);
}
