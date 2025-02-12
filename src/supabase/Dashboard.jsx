import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

import React from 'react'

const Dashboard = () => {

  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
  title: "",
  author: "",
  summary: "",
  content: "",
  image: "",
  tags: "",
});

const fetchPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
  } else {
    setPosts(data);
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const addPost = async (e) => {
  e.preventDefault();

  const newPost = {
    ...formData,
    date: new Date().toISOString().split("T")[0],
    tags: formData.tags ? formData.tags.split(",").map(tag => tag.trim()) : [],
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabase.from("posts").insert([newPost]);

  if (error) {
    console.error("Error inserting post:", error);
  } else {
    console.log("Post added successfully:", data);
    setFormData({
      title: "",
      author: "",
      summary: "",
      content: "",
      image: "",
      tags: "",
    });
    fetchPosts(); // Now this will work
  }
};

useEffect(() => {
  fetchPosts();
}, []);

return (
  <div>
    <h1>Blogs</h1>

    <form onSubmit={addPost} style={{ marginBottom: "2rem" }}>
      <h2>Add New Blog Post</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>

    {posts.length === 0 ? (
      <p>No posts available</p>
    ) : (
      posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "1rem" }}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <p>
            <strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}
          </p>
          {post.image && (
            <img src={post.image} alt={post.title} width="300" onError={(e) => (e.target.style.display = "none")} />
          )}
          <p>
            <strong>Tags:</strong> {Array.isArray(post.tags) ? post.tags.join(", ") : post.tags}
          </p>
          <p><strong>Content:</strong> {post.content}</p>
        </div>
      ))
    )}
  </div>
)
}

export default Dashboard