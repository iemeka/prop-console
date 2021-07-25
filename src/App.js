import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./landing/Main";
import Login from "./auth/login/Login";
import Signup from "./auth/sign-up/Signup";
import ContextProvider from "./app-context/ContexProvider";
import DomainSetup from "./domain-setup/DomainSetup";
import CustomName from "./domain-setup/custom-name/CustomName";
import OwnDomain from "./domain-setup/own-domain/OwnDomain";

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/domain" component={DomainSetup} />
            <Route exact path="/domain/custom-domain" component={CustomName} />
            <Route exact path="/domain/owner" component={OwnDomain} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
//
