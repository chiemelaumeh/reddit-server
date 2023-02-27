import React from "react";
import Header from "./Header";
import Authmodal from "./Authmodal";
import PostFormModal from "./PostFormModal";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Routinglocation from "./Routinglocation";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routinglocation />
      <Authmodal />
      <PostFormModal  />
    </Router>
  );
};

export default Routing;
