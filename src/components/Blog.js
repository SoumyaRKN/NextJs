import React from 'react';
import '../styles/Blog.css';
import Link from 'next/link';

function Blog({ blog }) {
    return (
        <div className="blog-item">
            <h3><Link href={`blogs/${blog.slug}`}>{blog.title}</Link></h3>
            <p>{blog.content}</p>
            <small>By {blog.author} On {blog.date}</small>
        </div>
    );
}

export default Blog;