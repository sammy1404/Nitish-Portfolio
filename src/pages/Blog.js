import React from 'react';
import ThemeButton from '../components/themeButton';
import Blogheader from '../blog/Blogheader';
import "../App.css";
import "./blog.css"

function Blog() {
  return (
    <div className="blog-page">
      <Blogheader />
      <ThemeButton />
    </div>
  );
}

export default Blog;
