import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="container">
        <h2 className="heading">Create writr. account</h2>
        {/* register form */}
        <form className="register-form">
          <input
            type="text"
            placeholder="Name"
            title="this will be your username"
            required
          />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">sign up</button>
        </form>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}
