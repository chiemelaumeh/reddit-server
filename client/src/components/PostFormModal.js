import OutsideClickHandler from "react-outside-click-handler";
import { useState, useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";

const PostFormModal = () => {
  const { postFormModalVisibility, setPostFormModalVisibility } =
    useContext(AuthModalContext);
  return (
    <div
      className={
        postFormModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <OutsideClickHandler
        onOutsideClick={() => setPostFormModalVisibility(false)}
      >
        <div className="post-modal-sub">ef</div>
      </OutsideClickHandler>
    </div>
  );
};

export default PostFormModal;
