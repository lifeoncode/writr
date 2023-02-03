import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <div className="container">
        {/* cover image display */}
        <img
          src="https://static.wixstatic.com/media/4a5235_3bf6bba1c49841929c83de687a260604~mv2.jpg/v1/fill/w_640,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4a5235_3bf6bba1c49841929c83de687a260604~mv2.jpg"
          alt="post cover"
          className="write-image"
        />
        {/* form */}
        <form className="write-form">
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
