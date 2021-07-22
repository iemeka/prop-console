import Background from "../../shared/Background";
import TextBox from "../../shared/TextBox";
import PasswordBox from "../../shared/PasswordBox";
import "./Signup.css";
import SubmitBtn from "../../shared/SubmitBtn";

export default function Signup() {
  const signupdata = "signup component"
  return (
    <Background>
      <TextBox title="Agency Name" placeholder="Enter Name" />
      <TextBox title="Email" placeholder="Enter Email" />
      <TextBox title="Phone Number" placeholder="+234" />
      <PasswordBox title="Password" />
      <div className="check-terms">
        <input type="checkbox" />
        &nbsp; I agree to the&nbsp; <a href="s"> Privacy Policy</a>,
        <a href="s">&nbsp;Terms and Conditions</a>
      </div>
      <SubmitBtn title="SIGNIN" test={signupdata} />
      <div className="forgot-pass">
        <p>
          Forgot password? <span>Kindly reset password</span>
        </p>
      </div>
    </Background>
  );
}
