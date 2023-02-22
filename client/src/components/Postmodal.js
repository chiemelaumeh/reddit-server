import React from "react";
import { useContext, useState, useEffect } from "react";
import AuthModalContext from "../context/AuthModalContext";
import PostContent from "./Postcontent";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";

const Postmodal = (props) => {
  const { postModalVisibility, setPostModalVisibility } =
    useContext(AuthModalContext);
  const [modalComment, setModalComment] = useState({});
  useEffect(() => {
    const getModalComment = async () => {
      try {
        const response = await axios.get(
          `https://redditt-api.onrender.com/comments/${props.id}`,
          // `http://localhost:4000/comments/${props.id}`,
          {
            withCredentials: true,
          }
        );
        setModalComment(response.data);
        // console.log(comment);
      } catch (error) {
        console.log(error.message);
      }
    };
    getModalComment();
  }, [props.id]);
  function reset() {
    //  setComment({})
    setPostModalVisibility(false);
  }
  return (
    // <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}>
    // </OutsideClickHandler>
    <div
      className={
        postModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <div className="post-sub">
        <OutsideClickHandler onOutsideClick={reset}>
          <PostContent open={true} {...modalComment} />
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Postmodal;
