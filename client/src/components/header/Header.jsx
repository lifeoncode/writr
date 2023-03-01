import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("writr-user"));
    if (currentUser === undefined || currentUser === null) {
      console.log("no user logged in");
    } else {
      console.log(currentUser);
      setUser(currentUser);
    }
  }, []);

  return (
    // the header contains navigation logo & links
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          writr.
        </Link>
        <nav>
          {user && (
            <>
              <Link to={"/write"}>write</Link>
              <Link to={"/profile"}>profile</Link>
            </>
          )}
          {!user && (
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
