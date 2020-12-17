import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Admin from "./pages/admin"

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
    </Router>
  );
}

export default App;
