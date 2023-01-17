import React from "react";
import Board from "./Board";
import Header from "./Header";
import Commentpage from "./Commentpage";
import { useLocation } from "react-router-dom";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {console.log(useLocation())}

  
        <Route exact path="/" element={<Board />} />
        <Route exact path="/comments/:id" element={<Commentpage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
