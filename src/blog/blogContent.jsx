import React from 'react'
import "./blogContent.css"
import blogData from './blog.json'

const BlogContent = () => {
  const [featuredPost, ...remainingPosts] = blogData.posts;

  return (
    <div className="blog-container">
      <h2 className='Latest'>FEATURED</h2>
      
      {/* Featured Post Section */}
      <div className="featured-post">
        <img src={'/profilePic.jpg'} alt={featuredPost.title} />
        <div className="featured-content">
          <h3>{featuredPost.title}</h3>
          <p className="date">{featuredPost.date}</p>
          <p className="summary">{featuredPost.summary}</p>
          <div className="tags">
            {featuredPost.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <h2 className='Latest'>OTHER READS</h2>
      {/* Scrollable Posts Section */}
      <div className="posts-grid">
        {remainingPosts.map(post => (
          <div key={post.id} className="post-card">
            <img src={'/profilePic.jpg'} alt={post.title} />
            <div className="post-content">
              <h4>{post.title}</h4>
              <p className="date">{post.date}</p>
              <p className="summary">{post.summary}</p>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogContent