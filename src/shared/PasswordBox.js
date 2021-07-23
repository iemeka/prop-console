import "./PasswordBox.css";
import { mdiEyeOffOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function PasswordBox(props) {
  return (
    <div className="text-box-wrap">
      <label>{props.title}</label>
      <input
        name={props.name}
        onChange={props.onchange}
        type="password"
        placeholder="..."
      />
      <Icon
        className="password-eye-icon"
        path={mdiEyeOffOutline}
        color="#999"
        size={1}
      />
    </div>
  );
}
