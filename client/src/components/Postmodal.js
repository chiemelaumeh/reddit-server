import React from "react";
import { useContext, useState, useEffect } from "react";
import AuthModalContext from "../context/AuthModalContext";
import Postcontent from "./PostContent";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";

const Postmodal = (props) => {
  const { postModalVisibility, setPostModalVisibility } =
    useContext(AuthModalContext);
  const [comment, setComment] = useState({});
  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comments/` + props.id,
          {
            withCredentials: true,
          }
        );
        setComment(response.data);
        // console.log(comment);
      } catch (error) {
        console.log(error.message);
      }
    };
    getComment();
  }, []);

  return (
    // <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}>
    // </OutsideClickHandler>
    <div
      className={
        postModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <OutsideClickHandler onOutsideClick={() => setPostModalVisibility(false)}>
        <div className="post-sub">
          <Postcontent open={true} {...comment} />
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Postmodal;
