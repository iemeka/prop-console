import "./LoadTemplates.css";
import temp1 from "../../assets/img/temp1.png";
import temp2 from "../../assets/img/temp2.png";
import temp3 from "../../assets/img/temp3.png";

export default function LoadTemplates() {
  return (
    <div className="modal-bg">
      <div className="img-holder" style={{
              background: `url(${temp3}) center / contain no-repeat white`,
            }}></div>
    </div>
  );
}
