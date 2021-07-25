import Background from "../../shared/Background";
import SubmitBtn from "../../shared/SubmitBtn";
import TextBox from "../../shared/TextBox";
import "./CustomName.css";

export default function CustomName() {
  return (
    <Background>
      <div className="custom-domain-content">
        <div className="domain-text">
          <h3>Setup Domain</h3>
          <p>Enter a sub domain fro your propconsole instance</p>
        </div>
        <div className="custom-name-box">
          <div className="custom-http">
            <TextBox placeholder="https://" />
          </div>
          <TextBox placeholder="propconsole.com" />
        </div>

        <SubmitBtn title="NEXT" />
      </div>
    </Background>
  );
}
