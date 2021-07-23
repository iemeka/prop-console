import "./Package.css";

export default function Package() {
  return (
    <div className="package-wrap" id="landing-pricing">
      <div className="top">
        <h3>Selling Package</h3>
      </div>
      <div className="packages">
        <div className="package">
          <div className="title">
            <h3>Medium</h3>
            <p>1-2 Template</p>
          </div>
          <div className="cost">
            <p>
              N45,000.00<span>/Quater</span>
            </p>
          </div>
          <div className="img">
            <span>view 3d</span>
          </div>
          <div className="btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="package" id="standard">
          <div className="title">
            <h3>Standard</h3>
            <p>2-4 Template</p>
          </div>
          <div className="cost">
            <p>
              N115,000.00<span>/Quater</span>
            </p>
          </div>
          <div className="img">
            <span>view 3d</span>
          </div>
          <div className="btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="package">
          <div className="title">
            <h3>Premium</h3>
            <p>3-6 Template</p>
          </div>
          <div className="cost">
            <p>
              N225,000.00<span>/Quater</span>
            </p>
          </div>
          <div className="img">
            <span>view 3d</span>
          </div>
          <div className="btn">
            <button>Get Started</button>
          </div>
        </div>

      </div>
    </div>
  );
}
