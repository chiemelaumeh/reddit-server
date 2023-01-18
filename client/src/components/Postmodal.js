import React from "react";
import { useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import Redditmain from "./Redditmain";
import Postcontent from "./Postcontent";

const Postmodal = (props) => {
  const { postModaVisibility, setPostModalVisibility } =
    useContext(AuthModalContext);

  return (
    <div
      className={
        postModaVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <div className="post-sub">
        <Postcontent  />
      </div>
    </div>
  );
};

export default Postmodal;
