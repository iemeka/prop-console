import { useCallback, useState } from "react";
import Background from "../../shared/Background";
import TextBox from "../../shared/TextBox";
import FormError from "../../shared/FormError";
import PasswordBox from "../../shared/PasswordBox";
import "./Signup.css";
import SubmitBtn from "../../shared/SubmitBtn";
import { Link } from "react-router-dom";

export default function Signup() {
  const [signUpData, setSignUpData] = useState({
    password: "",
    email: "",
    user_metadata: { agencyName: "", phoneNumber: "" },
  });
  const [errorMsg, setError] = useState("An email and password is required");

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
    setSignUpData();
  };

  return (
    <Background onsubmit={handleSubmit}>
      <div className="signup-content">

      <div className="error-space-holder">
        {errorMsg ? <FormError errorMessage={errorMsg} /> : null}
      </div>
      <TextBox
        title="Agency Name"
        onchange={setData}
        name="agencyName"
        placeholder="Enter Name"
        // required={true}
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
        // required={true}
      />
      <PasswordBox title="Password" name="password" onchange={setData} />
      <div className="check-terms">
        <p>
          <input type="checkbox" />
          &nbsp; I agree to the&nbsp; <a href="s"> Privacy Policy</a>,
          <a href="s">&nbsp;Terms and Conditions</a>
        </p>
      </div>
      <SubmitBtn title="SIGNUP" urlPath="/domain" />
      <div className="forgot-pass">
        <p>
          Forgot password? <span>Kindly reset password</span>
        </p>
      </div>
      <div className="already-reg">
        <p>
          Already Registered?{" "}
          <Link to="/login">
            <span>SIGNIN</span>
          </Link>
        </p>
      </div>
      </div>
    </Background>
  );
}
