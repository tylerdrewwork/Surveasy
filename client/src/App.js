import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Admin from "./pages/admin"
import Edit from "./pages/edit"
import Analytics from "./pages/analytics"
import CreateSurvey from "./pages/createSurvey"
import 'bootstrap/dist/css/bootstrap.min.css';

import './pages/style.css';

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

      <section className='back-div'>
        <h1>SurvEasy</h1>

        <div>Sign in Link</div>
        <div>Sign Up Link</div>

        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </section>
    </Router>
  );
}

export default App;
