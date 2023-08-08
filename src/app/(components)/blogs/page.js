"use client"
import Blog from '@/components/Blog';
import React, { useEffect, useState } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("api/getAllBlogs");
            const blogs = await response.json();
            setBlogs(blogs);
        }
        fetchData();
    }, [])

    return (
        <div className="container">
            {blogs.map(item => <Blog key={item.title} blog={item} />)}
        </div>
    );
}

export default Blogs;