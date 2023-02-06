import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h2 className="heading">Login to writr.</h2>
        {/* login form */}
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter username"
            required
            ref={userRef}
          />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <button type="submit" disabled={isFetching}>
            login
          </button>
        </form>
        <span>
          Don't have an account? <Link to="/register">Create one</Link>
        </span>
      </div>
    </div>
  );
}
