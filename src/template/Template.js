import "./Template.css";
import temp1 from "../assets/img/temp1.png";
import temp2 from "../assets/img/temp2.png";
import LoadTemplates from "./templates/LoadTemplates";

export default function Template() {
  return (
    <div className="template-wrap">
      <LoadTemplates />
      <div className="top">
        <h2>Choose A Template</h2>
      </div>
      <div className="body">
        <div className="template">
          <h2>Pecific</h2>
          <div
            className=" img"
            style={{
              background: `url(${temp1}) center / contain no-repeat white`,
            }}
          >
            <div className="hover-bg">
              <button>Preview</button>
            </div>
          </div>
          <button>Choose</button>
        </div>
        <div className="template">
          <h2>Ocean View</h2>
          <div
            className="img"
            style={{
              background: `url(${temp2}) center / contain no-repeat white`,
            }}
          >
            <div className="hover-bg">
              <button>Preview</button>
            </div>
          </div>
          <button>Choose</button>
        </div>
        <div className="template">
          <h2>Atlantic</h2>
          <div
            className="img"
            style={{
              background: `url(${temp1}) center / contain no-repeat white`,
            }}
          >
            <div className="hover-bg">
              <button>Preview</button>
            </div>
          </div>
          <button>Choose</button>
        </div>
      </div>
    </div>
  );
}
