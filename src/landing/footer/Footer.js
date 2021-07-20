import "./Footer.css";

export default function Footer() {
  return (
    <div className="foot-wrap">
      <div className="top">
        <div className="logo"></div>
        <div className="nav">
          <ul>
            <li>
              <a href="ss">About Us</a>
            </li>
            <li>
              <a href="ss">Pricing</a>
            </li>
            <li>
              <a href="s">Demo</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright &copy; 2021. PropConsole. All rights reserved</p>
      </div>
    </div>
  );
}
