import Background from "../../shared/Background";
import SubmitBtn from "../../shared/SubmitBtn";
import TextBox from "../../shared/TextBox";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <Background>
      <div className="reset-head">
        <div className="img"></div>
        <div className="text">
          <h3>Forgot Password?</h3>
          <p>Enter the email address associated with your account</p>
        </div>
      </div>

      <TextBox title="Email" placeholder="company@example.com" />
      <div className="another-way">
        <a href="s">Try another way</a>
      </div>
      <SubmitBtn title="RESET PASSWORD" />
    </Background>
  );
}
