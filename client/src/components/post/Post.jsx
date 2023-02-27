import "./Post.css";

export default function Post() {
  return (
    <>
      <div className="post">
        <div className="cover">
          <img
            src={require("../../assets/post-image.jpg")}
            alt="blog post cover"
          />
        </div>
        <div className="text">
          <h3 className="heading title">What I'm wearing this winter</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            in eligendi, eveniet illo magni consequatur atque nostrum ullam
            maiores modi aperiam sequi eum pariatur quidem accusantium assumenda
            numquam dolore similique magnam odio!
          </p>
          <div className="info">
            <span>
              <i className="fas fa-user"></i> Octavia Moyo{" "}
              <span className="time">
                <i className="fas fa-clock"></i>
                23 July 2022
              </span>
            </span>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}
