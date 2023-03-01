import "./Header.css";
import { Link, Navigate } from "react-router-dom";
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

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("writr-user");
    window.location.replace("/");
  };

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
              <button className="logout-link" onClick={handleLogout}>
                logout
              </button>
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
