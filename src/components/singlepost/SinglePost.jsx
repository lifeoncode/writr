import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="single-post">
      <div className="container">
        {/* post cover image */}
        <img
          className="cover-image"
          src={require("../../assets/post-image.jpg")}
          alt="post cover"
        />
        {/* post head contains post controls and time */}
        <div className="post-head">
          {/* post time */}
          <div className="post-info">
            <span className="post-author">Tim Bakers</span>
            <span className="post-time">22 october 2022</span>
          </div>
          {/* controls - edit - delete */}
          <div className="post-controls">
            <i className="fa-regular fa-pen-to-square btn edit-post-btn"></i>
            <i className="fa-solid fa-trash btn delete-post-btn"></i>
          </div>
        </div>
        {/* post content */}
        <div className="post-content">
          <h3 className="post-title heading">The only brew you need</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            vitae. Quam magni sint quis obcaecati tempora perspiciatis
            praesentium ab repellat est corrupti harum facilis illum, fuga
            magnam ullam similique expedita? Dicta, consequuntur animi!
          </p>
        </div>
      </div>
    </div>
  );
}
