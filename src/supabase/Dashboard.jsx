import { useEffect, useState } from "react";
import supabase from "./supabaseClient";
import MDXRenderer from "./MDXRenderer";
import "./dashboard.css"
import ThemeButton from "../components/themeButton";
import CollapsibleComponent from "./Preview";
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
  function tags(tags) {
    // Remove brackets, commas, and extra spaces, then split by commas
    const tagArray = tags
      .replace(/[\[\]"]+/g, "")  // Remove brackets and quotes
      .split(",")                 // Split by commas
      .map(tag => tag.trim());    // Trim extra spaces from each tag
    
    return tagArray;
  }
  


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

  // Function to delete a post
  const deletePost = async (postId) => {
    const confirmation = prompt("Type 'delete' to confirm deletion:");
    if (confirmation === "delete") {
      const { data, error } = await supabase.from("posts").delete().eq("id", postId);
      
      if (error) {
        console.error("Error deleting post:", error);
      } else {
        console.log("Post deleted successfully:", data);
        fetchPosts(); // Refresh the posts after deletion
      }
    } else {
      alert("Deletion cancelled.");
    }
  };

  return (
    <div className="dashboard">
      <ThemeButton />
      <h1 className="dashheader">Blog Dashboard</h1>
      <h2 className="dashsubheader">Add New Blog Post</h2>
      <form onSubmit={addPost} style={{ marginBottom: "2rem" }}>
        
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="textInput"
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
            className="textInput"
          />
        </div>
        <div>
          <textarea
            name="summary"
            placeholder="Summary"
            value={formData.summary}
            onChange={handleInputChange}
            required
            className="summary"
          />
        </div>
        <div>
          <input
            type="file"
            name="content"
            accept=".md,.mdx"
            onChange={handleFileChange}
            required
            className="fileinput"
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="fileinput"
          />
        </div>
        <div>
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={formData.tags}
            onChange={handleInputChange}
            className="textInput"
          />
        </div>
        <button type="submit" className="addpost">Add Post →</button>
      </form>
      <h2>Previews</h2>
        <div className="preview">
          
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="postpreview"
            >
              <div className="previewHeader">
              <h3>{post.title}</h3>
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
              </div>
              <p className="tags">
              <strong>Tags:</strong> 
                {tags(post.tags).map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </p>
              
              <p>
                <strong>Content:</strong>{" "}
                <a href={post.content} target="_blank" rel="noopener noreferrer">
                  View MDX Content
                </a>
              </p>
              <CollapsibleComponent Component={() => <MDXRenderer mdxUrl={post.content} />} />
              
              
              
              {/* Delete Button */}
              <button onClick={() => deletePost(post.id)}>Delete Post</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
