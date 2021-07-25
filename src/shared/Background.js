
import "./Background.css";

export default function Background(props) {
  return (
    <div className="background-wrap">
      {/* <div className="modal">
        <div className="modal-content">
          <VerifiedSignupModal />
        </div>
      </div> */}
      <div className="white-background">
        <form onSubmit={props.onsubmit} >
          <div className="header">
            <div className="logo"></div>
          </div>
          <div className="content">{props.children}</div>
        </form>
      </div>
      <div className="image-background">
        <div className="bg-text">
          <h2>To find the property you love</h2>
          <p>starts with a single search.</p>
        </div>
      </div>
    </div>
  );
}
