import { useCallback, useState } from "react";
import Background from "../../shared/Background";
import TextBox from "../../shared/TextBox";
import FormError from "../../shared/FormError";
import PasswordBox from "../../shared/PasswordBox";
import "./Signup.css";
import SubmitBtn from "../../shared/SubmitBtn";

export default function Signup() {
  const [signUpData, setSignUpData] = useState({
    password: "",
    email: "",
    user_metadata: { agencyName: "", phoneNumber: "" },
  });
  const [errorMsg, setError] = useState(null);

  const setData = useCallback(
    (e) => {
      setError(null);

      if (e.target.name === "email" || e.target.name === "password") {
        signUpData[e.target.name] = e.target.value;
      } else {
        signUpData["user_metadata"][e.target.name] = e.target.value;
      }
    },
    [signUpData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpData()
  };

  return (
    <Background onsubmit={handleSubmit}>
      <div className="error-space-holder">
        {errorMsg ? <FormError errorMessage={errorMsg} /> : null}
      </div>
      <TextBox
        title="Agency Name"
        onchange={setData}
        name="agencyName"
        placeholder="Enter Name"
        required={true}
      />
      <TextBox
        title="Email"
        name="email"
        onchange={setData}
        placeholder="Enter Email"
      />
      <TextBox
        title="Phone Number"
        name="phoneNumber"
        onchange={setData}
        placeholder="+234"
        required={true}
      />
      <PasswordBox title="Password" name="password" onchange={setData} />
      <div className="check-terms">
        <input type="checkbox" required />
        &nbsp; I agree to the&nbsp; <a href="s"> Privacy Policy</a>,
        <a href="s">&nbsp;Terms and Conditions</a>
      </div>
      <SubmitBtn title="SIGNUP" />
      <div className="forgot-pass">
        <p>
          Forgot password? <span>Kindly reset password</span>
        </p>
      </div>
    </Background>
  );
}
