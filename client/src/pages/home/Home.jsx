import "./home.css";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/posts${search}`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  );
}
