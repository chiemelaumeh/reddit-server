import OutsideClickHandler from "react-outside-click-handler";
import { useState, useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import Input from "./Input";
import TextArea from "./TextArea";

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
        <div className="post-modal-sub">
          <h3>Create a Post</h3>
          <Input placeholder={"Title"} />
          <TextArea placeholder={"Text (required)"} />
          <button className="post-form-btn">POST</button>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default PostFormModal;
