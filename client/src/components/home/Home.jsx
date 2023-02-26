import "./Home.css";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Post from "../post/Post";

export default function Home() {
  return (
    <main role="main">
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
    </main>
  );
}
