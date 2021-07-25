import Background from "../../shared/Background";
import FormError from "../../shared/FormError";
import PasswordBox from "../../shared/PasswordBox";
import SubmitBtn from "../../shared/SubmitBtn";
import TextBox from "../../shared/TextBox";
import "./Login.css";

export default function Login() {
  return (
    <Background>
      <div className="login-content">
        <div className="error-space-holder">
          <FormError errorMessage="Emain and Password is required for login"/>
        </div>
        <TextBox title="Email" placeholder="company@example.com" />
        <PasswordBox title="Password" />
        <SubmitBtn title="SIGNIN" urlPath="/domain" />
        <div className="forgot-pass">
          <p>
            Forgot password? <span>Kindly reset password</span>
          </p>
        </div>
      </div>
    </Background>
  );
}
