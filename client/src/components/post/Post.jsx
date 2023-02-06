import "./post.css";
import { Link } from "react-router-dom";

export default function Post({
  image,
  author,
  time,
  title,
  paragraph,
  postID,
}) {
  return (
    <div className="post">
      <img className="post-image" src={image} alt="article cover" />
      <div className="post-content">
        <span className="post-author">Author: {author}</span>
        <span className="post-time">{new Date(time).toDateString()}</span>
        <h3 title={title} className="post-title heading">
          {title}
        </h3>
        <p className="post-paragraph">{paragraph}</p>
        <Link className="post-link" to={`/post/${postID}`}>
          Read
        </Link>
      </div>
    </div>
  );
}

Post.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  author: "Tim Doe",
  time: "22 october 2022",
  title: "Post title",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos vero officia, vitae molestiae similique!",
  link: "https://google.com",
};
