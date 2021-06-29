import React, { useState, useContext } from "react";
import authContext from "../../store";

const Dashboard = () => {
  const [promos, setPromos] = useState([]);
  const [error, setError] = useState(false);

  const checkAuth = useContext(authContext);

  return(
    <h1>welcome to the jungle !</h1>
  )
};

export default Dashboard;
