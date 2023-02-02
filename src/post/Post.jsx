import "./post.css";

export default function Post({ image, time, title, paragraph, link }) {
  return (
    <div className="post">
      <img className="post-image" src={image} alt="article cover" />
      <div className="post-content">
        <span className="post-time">{time}</span>
        <h3 className="post-title heading">{title}</h3>
        <p className="post-paragraph">{paragraph}</p>
        <a href={link} className="post-link">
          Read
        </a>
      </div>
    </div>
  );
}

Post.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  time: "22 october 2022",
  title: "Post title",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos vero officia, vitae molestiae similique!",
  link: "https://google.com",
};
