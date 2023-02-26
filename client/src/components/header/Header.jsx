import "./Header.css";

export default function Header() {
  return (
    // the header contains navigation logo & links
    <>
      <header className="header">
        <div className="container">
          <span className="logo">writr.</span>
          <nav>
            <a href="/login">Login</a>
            <a href="/register">Sign up</a>
          </nav>
        </div>
      </header>
    </>
  );
}
