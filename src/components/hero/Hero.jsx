import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        {/* hero cover image */}
        <img
          className="hero-image"
          src={require("../../assets/hero-image.jpg")}
          alt="a cover"
        />
        {/* hero text */}
        <div className="hero-text">
          <span className="hero-title heading">Guide to minimalism</span>
          <a className="hero-link" href="https://google.com">
            Read blog
          </a>
        </div>
      </div>
    </div>
  );
}
