import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Admin from "./pages/admin";
import Edit from "./pages/edit";
import Analytics from "./pages/analytics";
import CreateSurvey from "./pages/createSurvey";
import TakeSurvey from "./pages/takeSurvey";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/edit">
        <Edit />
      </Route>
      <Route exact path="/analytics">
        <Analytics />
      </Route>
      <Route exact path="/create">
        <CreateSurvey />
      </Route>
      <Route path="/survey">
        <TakeSurvey />
      </Route>
    </Router>
  );
}

export default App;
