import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Post from "../components/post/Post";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      {/* all posts */}
      <div className="posts">
        <div className="container">
          {/* column a */}
          <div className="column-a">
            <Post />
            <Post />
          </div>
          {/* column b */}
          <div className="column-b">
            <Post />
            <Post />
            <Post />
          </div>
          {/* column c */}
          <div className="column-c">
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
