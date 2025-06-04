import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./index.css";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const categories = ["All", "Tech", "Lifestyle"];

const App = () => {
	const [posts, setPosts] = useState([]);
	const [category, setCategory] = useState("");
	const [selectedPost, setSelectedPost] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchPosts = useCallback(async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				`/api/posts${
					category ? `?category=${category}` : ""
				}`
			);
			console.log("Response data:", res.data);
			if (Array.isArray(res.data)) {
				setPosts(res.data);
			} else {
				setPosts([]); // fallback in case data is not an array
				console.error("Expected an array but got:", res.data);
			}
		} catch (err) {
			console.error("Error fetching posts:", err);
			setPosts([]);
		} finally {
			setLoading(false);
		}
	}, [category]);
	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	const fetchSinglePost = async (id) => {
		setLoading(true);
		try {
			const res = await axios.get(
				`/api/posts/${id}`
			);
			setSelectedPost(res.data);
		} catch (err) {
			console.error("Error fetching post:", err);
		} finally {
			setLoading(false);
		}
	};

	const closeModal = () => setSelectedPost(null);

	return (
		<div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col items-center justify-start p-4">
			<Link to="/create">
				<button className="fixed top-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg z-50 text-2xl font-bold">
					+
				</button>
			</Link>
			<div className="w-full max-w-screen-xl px-4 md:px-12">
				<h1 className="text-4xl font-bold mb-6 text-center text-cyan-500">
					Mini Blog Platform
				</h1>

				<div className="mb-6 flex justify-center">
					<label className="mr-2 font-medium">Filter by Category:</label>

					<Listbox
						value={category || "All"}
						onChange={(val) => setCategory(val === "All" ? "" : val)}
					>
						<div className="relative">
							<Listbox.Button className="relative w-52 cursor-pointer rounded bg-white/10 backdrop-blur-md text-slate-100 py-2 pl-3 pr-10 text-left border border-white/20 shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:border-cyan-400">
								<span className="block truncate">{category || "All"}</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<ChevronUpDownIcon
										className="h-5 w-5 text-slate-300"
										aria-hidden="true"
									/>
								</span>
							</Listbox.Button>

							<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white/10 backdrop-blur-md text-slate-100 py-1 text-base shadow-lg ring-1 ring-white/20 focus:outline-none sm:text-sm z-10">
								{categories.map((cat) => (
									<Listbox.Option
										key={cat}
										value={cat}
										className={({ active }) =>
											`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
												active ? "bg-cyan-600/30 text-white" : "text-slate-100"
											}`
										}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{cat}
												</span>
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</div>
					</Listbox>
				</div>

				{loading ? (
					<div className="flex justify-center items-center py-20">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
					</div>
				) : (
					<div className="flex flex-col gap-6">
						{Array.isArray(posts) && posts.length > 0 ? (
							posts.map((post) => (
								<div
									key={post.id}
									onClick={() => fetchSinglePost(post.id)}
									className="cursor-pointer rounded-xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-800 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.02] transition-all duration-300 ease-in-out border border-blue-700 hover:border-cyan-500"
								>
									<img
										src={
											post.image ||
											"https://via.placeholder.com/600x300?text=Blog+Image"
										}
										alt={post.title}
										className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
										<h2 className="text-white text-lg font-semibold">
											{post.title}
										</h2>
									</div>
								</div>
							))
						) : (
							<p className="text-center text-slate-400">No posts available.</p>
						)}
					</div>
				)}
			</div>

			{/* Modal for Selected Post */}
			{selectedPost && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
					<div className="bg-white max-w-xl w-full rounded-lg shadow-lg overflow-hidden relative">
						<button
							className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl font-bold"
							onClick={closeModal}
						>
							&times;
						</button>
						<img
							src={
								selectedPost.image ||
								"https://via.placeholder.com/600x300?text=Blog+Image"
							}
							alt={selectedPost.title}
							className="w-full h-60 object-cover"
						/>
						<div className="p-4">
							<h2 className="text-2xl font-bold text-cyan-700">
								{selectedPost.title}
							</h2>
							<p className="text-sm text-gray-500 mb-2">
								Category: {selectedPost.category}
							</p>
							<p className="text-gray-800">{selectedPost.content}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
