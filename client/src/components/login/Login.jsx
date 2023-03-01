import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  // login function
  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    const response = await fetch("http://localhost:5000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const loggedUser = await response.json();
    console.log(loggedUser);
    // ensure status code 200 from server response
    if (response.status !== 200) {
      alert("ERROR: wrong credentials");
    } else {
      localStorage.setItem("writr-user", JSON.stringify(loggedUser));
      setRedirect(true);
    }
  };

  // if redirecting
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login container">
      <h1 className="heading">Login to writr.</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Create one</Link>
      </p>
    </div>
  );
}
