import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const user = false;

  return (
    <header className="header">
      <div className="container">
        <span className="logo heading">Writr.</span>
        <nav className="nav">
          <Link to="/write">Write</Link>
          <Link to="/">Feed</Link>
          <Link to="/support">Support</Link>
          {user ? (
            <Link to="/settings">Profile</Link>
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
