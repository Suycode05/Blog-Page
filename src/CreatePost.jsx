import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const categories = ["Tech", "Lifestyle"];

const CreatePost = () => {
	const navigate = useNavigate();
	const [imageFile, setImageFile] = useState(null);
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;

		if (!form.title.value || !form.content.value || !form.category.value || !imageFile) {
			alert("Please fill in all fields and upload an image.");
			return;
		}

		const formData = new FormData();
		formData.append("title", form.title.value);
		formData.append("content", form.content.value);
		formData.append("category", form.category.value);
		formData.append("image", imageFile);

		try {
			await axios.post("http://localhost:5000/api/posts", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			setSuccessMessage("Blog post created successfully!");
			setTimeout(() => navigate("/"), 1500);
		} catch (err) {
			console.error(err);
			alert("Failed to create post.");
		}
	};

	return (
		<div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 relative">
			<div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg relative">
				{/* Close Button */}
				<button
					className="absolute top-2 right-3 text-white text-2xl hover:text-red-400 font-bold"
					onClick={() => navigate("/")}
					aria-label="Close form"
				>
					&times;
				</button>

				<h2 className="text-2xl font-bold mb-4 text-cyan-400">Create Blog Post</h2>

				{successMessage && (
					<div className="mb-4 p-3 rounded bg-green-600/80 text-white text-center font-semibold">
						{successMessage}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<input name="title" placeholder="Title" required className="w-full p-2 rounded bg-slate-800 text-white" />
					<input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required className="w-full p-2 rounded bg-slate-800 text-white" />
					<select name="category" required className="w-full p-2 rounded bg-slate-800 text-white">
						<option value="">Select Category</option>
						{categories.map((c) => <option key={c} value={c}>{c}</option>)}
					</select>
					<textarea name="content" placeholder="Content..." rows="5" required className="w-full p-2 rounded bg-slate-800 text-white" />
					<button type="submit" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded text-white font-semibold w-full">Post</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
