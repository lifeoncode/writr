import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./singlepost.css";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`/posts/${id}`);
      setPost(response.data);
    };

    getPost();
  }, [id]);

  return (
    <div className="single-post">
      <div className="container">
        {/* post cover image */}
        {post.photo && (
          <img className="cover-image" src={post.photo} alt="post cover" />
        )}
        {/* post head contains post controls and time */}
        <div className="post-head">
          {/* post time */}
          <div className="post-info">
            <span className="post-author">Author: {post.username}</span>
            <span className="post-time">
              {new Date(post.updatedAt).toDateString()}
            </span>
          </div>
          {/* controls - edit - delete */}
          <div className="post-controls">
            <i className="fa-regular fa-pen-to-square btn edit-post-btn"></i>
            <i className="fa-solid fa-trash btn delete-post-btn"></i>
          </div>
        </div>
        {/* post content */}
        <div className="post-content">
          <h3 className="post-title heading">{post.title}</h3>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}
