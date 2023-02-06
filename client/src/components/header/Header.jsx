import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./header.css";

export default function Header() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <header className="header">
      <div className="container">
        <span className="logo heading">Writr.</span>
        <nav className="nav">
          <Link to="/write">Write</Link>
          <Link to="/">Feed</Link>
          {user ? (
            <>
              <Link to="/settings">Profile</Link>
              <span className="logout-btn" onClick={handleLogout}>
                logout
              </span>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
