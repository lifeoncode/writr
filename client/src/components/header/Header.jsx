import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // the header contains navigation logo & links
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          writr.
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign up</Link>
        </nav>
      </div>
    </header>
  );
}
