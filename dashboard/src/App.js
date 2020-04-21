import React  from "react";
import { Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"

//import { server } from "./axios";

import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard.js";

function App() {
  
  return (
    <div className="App">
      <Route path="/" exact>
        <SignIn />
      </Route>
      <PrivateRoute exact path="/dashboard"
       component={Dashboard}        
      />
    </div>
  );
}

export default App;
