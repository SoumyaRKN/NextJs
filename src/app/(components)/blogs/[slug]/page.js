"use client"
import React, { useEffect, useState } from 'react';

function SingleBlog({ params }) {
    const [blog, setBlog] = useState({});


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/api/${params.slug}`);
            const data = await response.json();
            setBlog(data[0]);
        }
        fetchData();
    }, [])

    return (
        <div className='container'>
            <div>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <small>By {blog.author} On {blog.date}</small>
            </div>
        </div>
    );
}

export default SingleBlog;