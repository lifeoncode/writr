import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <img
            src={require("../../assets/hero-image.jpg")}
            alt="trending blog post cover"
          />
          <div className="text">
            <span className="heading title">Guide to minimalism</span>
            <span className="time">12 october 2022</span>
          </div>
        </div>
      </div>
    </>
  );
}
