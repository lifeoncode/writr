import "./Write.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  // publish post function
  const handlePublish = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.set("file", files[0]);
    postData.set("title", title);
    postData.set("content", content);
    postData.set(
      "username",
      JSON.parse(localStorage.getItem("writr-user")).username
    );
    const response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      body: postData,
    });
    if (response.status === 200) {
      window.location.replace("/");
    } else {
      alert("ERROR: could not publish");
    }
  };

  return (
    <div className="write">
      <div className="container">
        <form onSubmit={handlePublish}>
          <label htmlFor="cover-input">
            <i className="fa-regular fa-image"></i>
            <span>add cover image</span>
          </label>
          <input
            type="file"
            id="cover-input"
            className="hidden"
            required
            onChange={(e) => setFiles(e.target.files)}
          />
          <input
            type="text"
            placeholder="Title..."
            className="title-input"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill
            className="textarea"
            modules={modules}
            formats={formats}
            value={content}
            onChange={(newValue) => setContent(newValue)}
          />
          <button className="publish-btn" type="submit">
            publish
          </button>
        </form>
      </div>
    </div>
  );
}
