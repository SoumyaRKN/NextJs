"use client"
import Blog from "@/components/Blog";
import { useEffect, useState } from "react";

export default function Home() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/getFeaturedBlogs");
      const blogs = await response.json();
      setFeaturedBlogs(blogs);
    }
    fetchData();
  }, [])

  return (
    <div className="container">
      {featuredBlogs.map(item => <Blog key={item.title} blog={item} />)}
    </div>
  );
}
