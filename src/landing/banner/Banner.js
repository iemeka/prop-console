import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner-wrap">
      <div className="nav-section">
        <Link to="/">
          <div className="img-holder"></div>
        </Link>
        <div className="nav-side">
          <ul>
            <li>
              <a href="#landing-about">About Us</a>
            </li>
            <li>
              <a href="#landing-pricing">Pricing</a>
            </li>
            <li>
              <a href="#landing-demo">Demo</a>
            </li>
            <li>
              <Link to="/signup">
                <button>Get Started</button>
              </Link>
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
