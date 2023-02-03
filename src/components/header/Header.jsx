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
          <a href="/account" className="heading">
            Account
          </a>
          <a href="/support" className="heading">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}
