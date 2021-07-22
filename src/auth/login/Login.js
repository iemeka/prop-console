import Background from "../../shared/Background";
import FormError from "../../shared/FormError";
import PasswordBox from "../../shared/PasswordBox";
import SubmitBtn from "../../shared/SubmitBtn";
import TextBox from "../../shared/TextBox";
import "./Login.css";

export default function Login() {
  const logindata = "login component"
  return (
    <Background>
      <div className="error-space-holder">
        <FormError />
      </div>
      <TextBox title="Login" placeholder="company@example.com" />
      <PasswordBox title="Password" />
      <SubmitBtn title="SIGNIN" test={logindata} />
      <div className="forgot-pass">
        <p>
          Forgot password? <span>Kindly reset password</span>
        </p>
      </div>
    </Background>
  );
}
