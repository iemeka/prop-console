import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./landing/Main";
import Login from "./auth/login/Login";
import Signup from "./auth/sign-up/Signup";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
