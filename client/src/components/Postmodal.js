import React from "react";
import { useContext, useState, useEffect } from "react";
import AuthModalContext from "../context/AuthModalContext";
import Postcontent from "./Postcontent";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";

const Postmodal = (props) => {
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

  const { postModalVisibility, setPostModalVisibility } =
    useContext(AuthModalContext);

  return (
    // <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}>
    // </OutsideClickHandler>
    <div

      className={
        postModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <div className="post-sub">
        <Postcontent open={true} {...comment} />
      </div>

    </div>
  );
};

export default Postmodal;
