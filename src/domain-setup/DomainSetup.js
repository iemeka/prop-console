import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import Background from "../shared/Background";
import "./DomainSetup.css";

export default function DomainSetup() {
  return (
    <Background>
      <div className="domain-text">
        <h3>Setup Domain</h3>
        <p>
          Customize your built-in domain or map an existing domain you own to
          propconsole.
        </p>
      </div>
      <div className="domain-btns">
        <button>
          <div className="in-domain-btn">
            <h3>Auto Generate</h3>
            <p>eg: user1234.propconsole.com</p>
          </div>{" "}
          <Icon path={mdiChevronRight} size={1.3} color="white" />{" "}
        </button>
        <button>
          <div className="in-domain-btn">
            <h3>Add custom name</h3>
            <p>eg: John.propconsole.com</p>
          </div>{" "}
          <Icon path={mdiChevronRight} size={1.3} color="white" />{" "}
        </button>
        <button>
          <div className="in-domain-btn">
            <h3>Already own a domain?</h3>
            <p>eg: mydomainname.com</p>
          </div>{" "}
          <Icon path={mdiChevronRight} size={1.3} color="white" />{" "}
        </button>
      </div>
      <div className="domain-control">
        <button>
          Skip <Icon path={mdiChevronRight}  size={1} />{" "}
        </button>
      </div>
    </Background>
  );
}
