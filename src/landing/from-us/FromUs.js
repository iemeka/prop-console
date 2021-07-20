import "./FromUs.css";

export default function FromUs() {
  return (
    <div className="from-us-wrap">
      <div className="title">
        <h1>What You Get From Us</h1>
      </div>
      <div className="body">
        <div className="item-holder">
          <div className="item" id="sell">
            <div className="img-holder">
              <div className="img"></div>
            </div>
            <div className="description">
              <p>Sell Property</p>
            </div>
          </div>
          <div className="item" id="buy">
            <div className="img-holder">
              <div className="img"></div>
            </div>
            <div className="description">
              <p>Buy Property</p>
            </div>
          </div>
          <div className="item" id="tenant">
            <div className="img-holder">
              <div className="img"></div>
            </div>
            <div className="description">
              <p>Manage Tenant</p>
            </div>
          </div>
          <div className="item" id="leads">
            <div className="img-holder">
              <div className="img"></div>
            </div>
            <div className="description">
              <p>Manage Leads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
