import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { server } from "./../../axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const [cars, setCars] = useState([]);
  const history = useHistory();
  useEffect(() => {
    server
      .get("/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    server
      .delete(`/cars/${id}`)
      .then((res) => console.log(res))
      .then(() => {
        const filtered = cars.filter((car) => {
          return car._id !== id;
        });
        setCars(filtered);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Dashoard</h1>
      <Link to="/add">Add Car</Link>
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Sign Out
      </button>
      <div className="information">
        <p>Number of Cars in Inventory:{cars.length}</p>
        <p>
          MSRP of Inventory: $
          {cars
            .reduce((accumulator, item) => {
              return (accumulator = accumulator + Number(item.price));
            }, 0)
            .toLocaleString("USD")}
        </p>
      </div>
      <div className="currentInventory">
        {cars.map((car) => {
          return (
            <p key={car.id}>
              {car.year},{car.make}, {car.model}, {car.miles} Miles, {car.color}
              ,{car.vin} 
              <button onClick={() =>handleDelete(car._id)}>Delete</button>
              <button>Edit</button>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
