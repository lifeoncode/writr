import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="container">
        {/* user profile */}
        <div className="profile">
          {/* note on updating - hint */}
          <div className="note">
            <span>
              <i className="fa-solid fa-bell"></i>
              <strong>Update account details:</strong> You can change your
              account details however many times you want. Changing your account
              details will change how others see your profile on{" "}
              <strong className="heading">Writr.</strong>
            </span>
          </div>
          {/* profile information - update here */}
          <img
            src="https://images.unsplash.com/photo-1675379324734-a3629b27e1bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            className="profile-photo"
            alt="user profile"
          />

          {/* form */}
          <form className="profile-form">
            {/* file input form group */}
            <div className="form-group">
              <label
                htmlFor="profile-photo-input"
                className="profile-photo-label"
              >
                <i class="fa-solid fa-upload"></i>
                <span>update profile photo</span>
              </label>
              <input type="file" id="profile-photo-input" hidden />
            </div>
            {/* username form group */}
            <div className="form-group">
              <label htmlFor="profile-username-input">username</label>
              <input type="text" id="profile-username-input" value={"Billie"} />
            </div>
            {/* email form group */}
            <div className="form-group">
              <label htmlFor="profile-email-input">email</label>
              <input
                type="email"
                id="profile-email-input"
                value={"billie@email.com"}
              />
            </div>
            {/* password form group */}
            <div className="form-group">
              <label htmlFor="profile-password-input">password</label>
              <input type="password" value={"password123"} />
            </div>
            <button type="submit">update</button>
          </form>
          {/* note on deleting - hint */}
          <div className="note">
            <span>
              <i className="fa-solid fa-bell"></i>
              <strong>Delete your account:</strong> Deleting your account means
              you erase all your data on{" "}
              <strong className="heading">Writr.</strong> all your articles
              along with other related data will be permanently deleted.
            </span>
          </div>
          <button type="button" className="delete-profile-btn">
            delete account
          </button>
        </div>
      </div>
    </div>
  );
}
