import {useState } from "react";
import React from 'react';


import { Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn.js";
//import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddCar from "./Components/AddCar/AddCar";

//import { server } from "./axios";

import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard.js";

function App() {
  const [carList, setCarList] = useState([]);

  return (
    <div className="App">
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/dashboard">
        <Dashboard carList={carList} setCarList={setCarList} />
      </Route>
      <Route path="/add">
        <AddCar carList={carList} setCarList={setCarList} />
      </Route>
    </div>
  );
}

export default App;

// <PrivateRoute exact path="/add" component={AddCar} />
