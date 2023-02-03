import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <h2 className="heading">Login to writr.</h2>
        {/* login form */}
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">login</button>
        </form>
        <span>
          Don't have an account? <Link to="/register">Create one</Link>
        </span>
      </div>
    </div>
  );
}
