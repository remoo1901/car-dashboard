import React  from "react";
import { Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn.js";
//import { server } from "./axios";

import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard.js";

function App() {
  
  return (
    <div className="App">
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
