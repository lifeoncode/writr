import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div className="posts container">
      {posts.map((post) => (
        <Post
          title={post.title}
          paragraph={post.desc}
          author={post.username}
          time={post.updatedAt}
          postID={post._id}
        />
      ))}
    </div>
  );
}
