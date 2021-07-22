import './SubmitBtn.css';

export default function  SubmitBtn(props) {
  return <div className="submit-btn-wrap">
    <button onClick={()=>{console.log(props.test)}}>{props.title}</button>
  </div>
}