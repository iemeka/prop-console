import SubmitBtn from "../../shared/SubmitBtn";
import TextBox from "../../shared/TextBox";
import "./Signup.css";
export default function SignupModal() {
  return (
    <>
      <div className="img"></div>
      <h2>Verify Your Email Address</h2>
      <p>
        An email with a verification code has been sent to{" "}
        <span className="mark">john@propconsole.com</span>
      </p>
      <div className="signup-modal">
        <TextBox title="Enter code here:" className="signup-modal-text" />
      </div>

      <p>Can't find our code? Please check your spam folder!</p>

      <SubmitBtn title="NEXT" />
    </>
  );
}
