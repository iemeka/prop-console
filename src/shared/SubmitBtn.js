import './SubmitBtn.css';

export default function  SubmitBtn(props) {
  return <div className="submit-btn-wrap">
    <button>{props.title}</button>
  </div>
}