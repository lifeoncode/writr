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
    "https://t4.ftcdn.net/jpg/04/87/28/07/360_F_487280776_70nVPeKBJquslGgmpLrWQuEJ34QKahzR.jpg",
};
