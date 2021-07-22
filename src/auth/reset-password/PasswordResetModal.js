import SubmitBtn from "../../shared/SubmitBtn";
import "./ResetPassword.css";
export default function PasswordResetModal() {
  return (
    <>
      <div className="img"></div>
      <h2>Thank You!</h2>
      <p>Your password has been reset.</p>
      <SubmitBtn title="SIGN IN" />
    </>
  );
}
