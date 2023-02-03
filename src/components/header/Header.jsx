import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <span className="logo heading">Writr.</span>
        <nav className="nav">
          <a href="/write" className="heading">
            Write
          </a>
          <a href="/" className="heading">
            Feed
          </a>
          <a href="/support" className="heading">
            Support
          </a>
          <a href="/profile" className="heading">
            Profile
          </a>
        </nav>
      </div>
    </header>
  );
}
