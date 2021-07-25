import { Link } from "react-router-dom";
import "./SubmitBtn.css";

export default function SubmitBtn(props) {
  return (
    <div className="submit-btn-wrap">
      <Link to={props.urlPath}>
        <button>{props.title}</button>
      </Link>
    </div>
  );
}
