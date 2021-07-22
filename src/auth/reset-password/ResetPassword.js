import Background from "../../shared/Background";
import "./ResetPassword.css";
import TextBox from '../../shared/TextBox'
import SubmitBtn from '../../shared/SubmitBtn'

export default function ResetPassword() {
  return <Background>
    <TextBox title="New Password" />
    <TextBox title="Confirm Password" />
    <SubmitBtn title="UPDATE" />
  </Background>;
}
