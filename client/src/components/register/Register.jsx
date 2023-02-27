import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  // handle register function
  const handleRegister = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    const response = await fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const responseData = await response.json();
    console.log(responseData);
    // ensure status code 200 from server response
    if (response.status !== 200) {
      alert("ERROR: Could not register new user.");
    } else {
      setRedirect(true);
    }
  };

  // if redirecting
  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="register container">
      <h1 className="heading">Create your writr account.</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          title="This will be the name people will know you by (it will be your author name)"
          required
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
