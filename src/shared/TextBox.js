import "./TextBox.css";

export default function TextBox(props) {
  return (
    <div className="text-box-wrap">
      <label>{props.title}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}
