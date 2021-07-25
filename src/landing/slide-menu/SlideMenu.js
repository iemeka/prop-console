import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../app-context/context";
import "./SlideMenu.css";

export default function SlideMenu() {
  const { translateVal, setTranslateVal } = useContext(context);
  return (
    <div
      className="slide-menu-wrap"
      style={{ transform: `translatey(${translateVal})` }}
    >
      <div className="slide-head">
        <button onClick={() => setTranslateVal("-927px")}>
          <Icon size={1.1} path={mdiClose} color="white" />
        </button>
        <div className="slide-logo"></div>
      </div>
      <div className="slide-links">
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
          <Link to="/login">
            <li>LOGIN</li>
          </Link>
          <Link to="/signup">
            <li>SIGNUP</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
