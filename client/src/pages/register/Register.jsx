import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      response.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <h2 className="heading">Create writr. account</h2>
        {/* register form */}
        <form className="register-form" onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Name"
            title="this will be your username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">sign up</button>
        </form>
        {/* if there's an error */}
        {error && <span className="error-message">something went wrong</span>}
        {/* login if user has account */}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}
