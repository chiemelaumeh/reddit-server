import React, { useEffect } from "react";
import Header from "./Header";
import Authmodal from "./Authmodal";
import PostFormModal from "./PostFormModal";
import CommunityFormModal from "./CommunityFormModal";
import DeleteModal from "./DeleteModal";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Routinglocation from "./Routinglocation";
import { useContext } from "react";
import RedirectContext from "../context/RedirectContext";
import RerenderContext from "../context/RerenderContext";

const Routing = () => {
  const { redirect, setRedirect } = useContext(RedirectContext);
  const { errorPage, setErrorPage, allProps, setAllProps } = useContext(RerenderContext);
  // console.log(allProps)
  useEffect(() => {
    if (errorPage) {
      setErrorPage(false);
    }
  }, [errorPage]);

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);
  return (
    <Router>
      {!!errorPage && <Navigate to={errorPage} />}

      {!!redirect && <Navigate to={redirect} />}

      {!redirect && (
        <>
          <Header />
          <Routinglocation />
          <Authmodal />
          <CommunityFormModal />
          <PostFormModal />
          {/* <DeleteModal  /> */}
        </>
      )}
    </Router>
  );
};

export default Routing;
