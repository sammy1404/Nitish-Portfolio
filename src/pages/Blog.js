import React from 'react';
import ThemeButton from '../components/themeButton';
import Blogheader from "../blog/Blogheader"
import BlogContent from '../blog/blogContent';
import "../App.css";
import "./blog.css"

function Blog() {
  return (
    <div className="blog-page">
      <Blogheader />
      <ThemeButton />
      <BlogContent />
    </div>
  );
}

export default Blog;
