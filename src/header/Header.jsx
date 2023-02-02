import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <span className="logo">Writr</span>
        <nav className="nav">
          <a href="/write">Write</a>
          <a href="/account">Account</a>
          <a href="/support">Support</a>
        </nav>
      </div>
    </header>
  );
}
