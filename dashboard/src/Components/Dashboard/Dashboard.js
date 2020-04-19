import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import {server} from "./../../axios"

function Dashboard() {
  const [Cars, setCars] = useState([]);
  useEffect(() => {
    server.get("/cars").then((res) => setCars(res.data)).catch((err) => console.log(err))}, []);
      
      
      
  

  return (
    <div>
      <h1>Dashoard 1</h1>
    </div>
  );
}

export default Dashboard;
