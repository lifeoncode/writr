import "./posts.css";
import Post from "../post/Post";

export default function Posts() {
  return (
    <div className="posts container">
      <Post />
      <Post />
      <Post title="This is the next one in the line of more than 60 years" />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
