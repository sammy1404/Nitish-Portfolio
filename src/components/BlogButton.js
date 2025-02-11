import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import "../components/BlogButton.css"; // You'll need to create this CSS file

const BlogButton = () => {
  return (
    <div id="blog">
      <Link to="/blog">
        <div className="blogButton">
          <svg className="left-icon" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.093,1.293l-11.2,11.2a.99.99,0,0,0-.242.391l-1.6,4.8A1,1,0,0,0,5,19a1.014,1.014,0,0,0,.316-.051l4.8-1.6a1.006,1.006,0,0,0,.391-.242l11.2-11.2a1,1,0,0,0,0-1.414l-3.2-3.2A1,1,0,0,0,17.093,1.293ZM9.26,15.526l-2.679.893.893-2.679L17.8,3.414,19.586,5.2ZM3,21H20a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"/></svg>
          <h5 className='blogButtonText'>Visit my Blog!</h5>  
          <svg className="right-icon" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default BlogButton;