import "./TextBox.css";

export default function TextBox(props) {
  return (
    <div className="text-box-wrap">
      <label>{props.title}</label>
      <input
        type="text"
        name={props.name}
        onChange={props.onchange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}
