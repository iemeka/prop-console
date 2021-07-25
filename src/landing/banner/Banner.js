import "./Banner.css";
import { Link } from "react-router-dom";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { useContext } from "react";
import { context } from "../../app-context/context";

export default function Banner() {
  const {setTranslateVal} = useContext(context)
  return (
    <div className="banner-wrap">
      <div className="banner-content">
      <div className="nav-section">
        <Link to="/">
          <div className="img-holder"></div>
          </Link>
          <div onClick={()=> setTranslateVal("0px")} className="menu-icon-holder">
            <Icon className="menu-icon" path={mdiMenu} />
          </div>
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
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
              </li>
              <li>
              <Link to="/signup">
                <button>SIGNUP</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="banner-text">
        <h1>
          Everything Property In
          <br /> One Place
        </h1>
        <p>
          Need More Information? <span>Contact Us</span>
        </p>
      </div>
      </div>
    </div>
  );
}
