import "./PeopleThink.css";

export default function PeopleThink() {
  return (
    <div className="think-wrap">
      <div className="left">
        <h3>What do people think about ProConsole?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac
          tortor a est condimentum. Urna, vestibulum ultrices senectus lobortis
          est maecenas neque, urna cras.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac
          tortor a est condimentum. Urna, vestibulum ultrices senectus lobortis
          est maecenas neque, urna cras.
        </p>
        <p>
          Mr Segun <br /> <span>CEO & Co-Founder</span>
        </p>
      </div>
      <div className="right">
        <div className="player">
          <video className="player__video viewer" src="652333414.mp4"></video>
        </div>
      </div>
    </div>
  );
}
