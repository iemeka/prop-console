import Background from "../../shared/Background";
import "./OwnDomain.css";

export default function OwnDomain() {
  return (
    <Background>
      <div className="domain-text">
        <h3>Setup Domain</h3>
        <p>Kindly follow this steps below.</p>
      </div>
      <div className="domain-steps">
        <p>Access the domain administration console of our domain vendor.</p>
        <p>
          Login using the credentials provided to you by your domain vendor.
        </p>
        <p>Edit the "A RECORD" field, and update it with the IP address.</p>
        <p>
          Edit the "C NAME" field, and update it with the value
          john_propconsole.com
        </p>
        <p>Save the changes.</p>
      </div>
    </Background>
  );
}
