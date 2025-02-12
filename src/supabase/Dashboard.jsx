import { useEffect, useState } from "react";
import supabase from "./supabaseClient";
import MDXRenderer from "./MDXRenderer";
import { type } from "@testing-library/user-event/dist/type";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    content: null, // MDX/MD file
    image: null,   // Image file
    tags: "",
  });

  // Fetch posts from Supabase
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

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle text input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file selection (MDX and Image)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  // Upload file to Supabase Storage
  const uploadFileToSupabase = async (file, bucketName) => {
    if (!file) return null;

    const filePath = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      console.error(`Upload Error (${bucketName}):`, error);
      return null;
    }

    return supabase.storage.from(bucketName).getPublicUrl(filePath).data.publicUrl;
  };

  // Submit form and upload files
  const addPost = async (e) => {
    e.preventDefault();

    // Upload files to Supabase Storage
    const contentUrl = await uploadFileToSupabase(formData.content, "blog-files");
    const imageUrl = await uploadFileToSupabase(formData.image, "blog-thumbnails");

    if (!contentUrl || !imageUrl) {
      alert("File upload failed!");
      return;
    }

    // Prepare post data
    const newPost = {
      title: formData.title,
      author: formData.author,
      summary: formData.summary,
      content: contentUrl,
      image: imageUrl,
      tags: formData.tags ? formData.tags.split(",").map(tag => tag.trim()) : [],
      created_at: new Date().toISOString(),
    };

    // Insert post into Supabase database
    const { data, error } = await supabase.from("posts").insert([newPost]);

    if (error) {
      console.error("Error inserting post:", error);
    } else {
      console.log("Post added successfully:", data);
      setFormData({
        title: "",
        author: "",
        summary: "",
        content: null,
        image: null,
        tags: "",
      });
      fetchPosts();
    }
  };

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
          <input
            type="file"
            name="content"
            accept=".md,.mdx"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
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
          <div
            key={post.id}
            style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem", marginBottom: "1rem" }}
          >
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <p>
              <strong>Author:</strong> {post.author} | <strong>Date:</strong>{" "}
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            
            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                width="300"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                width="300"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            
            <p>
              <strong>Tags:</strong> {Array.isArray(post.tags) ? post.tags.join(", ") : post.tags}
            </p>
            
            <p>
              <strong>Content:</strong>{" "}
              <a href={post.content} target="_blank" rel="noopener noreferrer">
                View MDX Content
              </a>
            </p>
            <MDXRenderer mdxUrl={post.content} />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
