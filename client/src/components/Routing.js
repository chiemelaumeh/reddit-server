import React from "react";
import Header from "./Header";
import Authmodal from "./Authmodal";
import PostFormModal from "./PostFormModal";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Routinglocation from "./Routinglocation";
import { useContext } from "react";
import RedirectContext from "../context/RedirectContext";

const Routing = () => {
  const { redirect, setRedirect } = useContext(RedirectContext);
  return (
    <Router>
      {redirect && <Navigate to={redirect} />}

      {!redirect && (
        <>
          <Header />
          <Routinglocation />
          <Authmodal />
          <PostFormModal />
        </>
      )}
    </Router>
    
  );
};

export default Routing;
