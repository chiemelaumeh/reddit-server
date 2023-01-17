import React from "react";

import Header from "./Header";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Routinglocation from "./Routinglocation";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routinglocation />
      
    </Router>
  );
};

export default Routing;
