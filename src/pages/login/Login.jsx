import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <h2 className="heading">Login to Writr.</h2>
        {/* login form */}
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">login</button>
        </form>
        <span>
          Don't have an account? <a href="https://github.com">Create one</a>
        </span>
      </div>
    </div>
  );
}
