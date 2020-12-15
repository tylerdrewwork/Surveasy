import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signin"

function App() {
  return (
    <Router>
    <div>Hello World</div>
    <Route exact path="/signin">
      <SignIn/>
    </Route>
    </Router>
    
  );
}

export default App;
