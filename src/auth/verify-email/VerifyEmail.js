import Background from "../../shared/Background";
import SubmitBtn from "../../shared/SubmitBtn";
import TextBox from "../../shared/TextBox";
import "../forgot-password/ForgotPassword.css";
import "./VerifyEmail.css"; // more precedence

export default function VerifyEmail() {
  return (
    <Background>
      <div className="reset-head">
        <div className="img"></div>
        <div className="text">
          <h3>Verify Your Email</h3>
          <p>
            Please enter 4 digit code sent to <span>john@propconsole.com</span>
          </p>
        </div>
      </div>

      <TextBox title="Enter code here:" placeholder="" />
      <div className="another-way">
        <a href="s">Re-send code</a>
      </div>
      <SubmitBtn title="CONFIRM" />
    </Background>
  );
}
