import "./home.css";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  );
}
