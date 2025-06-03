// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CreatePost from "./CreatePost";

const App = () => {
	return (
		<Router>
			<div className="relative">
				{/* Top Right Plus Button */}
				<Link to="/create">
					<button className="fixed top-4 right-4 z-50 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg transition duration-300">
						<span className="text-2xl font-bold">+</span>
					</button>
				</Link>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<CreatePost />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
