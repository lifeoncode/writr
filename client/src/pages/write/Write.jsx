import { useState, useContext } from "react";
import axios from "axios";
import "./write.css";
import { Context } from "../../context/Context";

export default function Write() {
  const [title] = useState("");
  const [desc] = useState("");
  const [file] = useState(null);
  const { user } = useContext(Context);

  const handlePublish = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("error occured while uploading file:", err);
      }
    }

    try {
      const response = await axios.post("/posts", newPost);
      window.location.replace(`/post/${response.data._id}`);
    } catch (err) {}
  };

  return (
    <div className="write">
      <div className="container">
        {/* cover image display */}
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="post cover"
            className="write-image"
          />
        )}
        {/* form */}
        <form className="write-form" onSubmit={handlePublish}>
          {/* title and cover image form group */}
          <div className="form-group">
            <label htmlFor="file-input">
              <i className="fa-solid fa-plus"></i>
              <i class="fa-solid fa-image"></i>
            </label>
            <input type="file" id="file-input" hidden />
            <input
              type="text"
              id="write-title"
              className="write-input"
              placeholder="Title"
              autoFocus
              required
            />
          </div>
          {/* text - post content form group */}
          <div className="form-group">
            <textarea
              type="text"
              placeholder="Tell your story..."
              className="write-input write-content"
              required
            ></textarea>
          </div>
          {/* submit button */}
          <button type="submit" className="write-submit">
            publish
          </button>
        </form>
      </div>
    </div>
  );
}
