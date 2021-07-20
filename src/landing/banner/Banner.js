import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-wrap">
      <div className="nav-section">
        <div className="img-holder"></div>
        <div className="nav-side">
          <ul>
            <li><a href="e">About Us</a></li>
            <li><a href="e">Pricing</a></li>
            <li><a href="e">Demo</a></li>
            <li>
              <button>Get Started</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="banner-text">
        <h1>Everything Property In One Place</h1>
        <p>
          Need More Information? <span>Contact Us</span>
        </p>
      </div>
    </div>
  );
}
