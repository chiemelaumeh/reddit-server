import OutsideClickHandler from "react-outside-click-handler";
import { useState, useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import Input from "./Input";
import TextArea from "./TextArea";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const PostFormModal = () => {
  const { postFormModalVisibility, setPostFormModalVisibility } =
    useContext(AuthModalContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
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
          <Input placeholder={"Title"} value={title} />
          <TextArea placeholder={"Text (required)"} value={body} />
          <div>
            <ReactMarkdown remarkPlugins={[gfm]} children={""} />
          </div>
          <button className="post-form-btn">POST</button>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default PostFormModal;
