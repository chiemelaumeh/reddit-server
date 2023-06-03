import { useState, useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import RerenderContext from "../context/RerenderContext";
import Input from "./Input";
import TextArea from "./TextArea";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const PostFormModal = () => {
  const { postFormModalVisibility, setPostFormModalVisibility } =
    useContext(AuthModalContext);
  const { setNewPosts } = useContext(RerenderContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const data = { title, body };

  const createPost = async () => {
    if (title.length === 0 || body.length === 0) {
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/comments/",
        data,
        { withCredentials: true }
      );

      setNewPosts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  function handleTwo() {
    createPost();
    setTitle("");
    setBody("");
    setPostFormModalVisibility(false);
  }
  return (
    <div
      className={
        postFormModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <div className="post-modal-sub">
        <h3>Create a Post</h3>
        <Input
          required
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextArea
          placeholder={"Text (required)"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <div>
          <ReactMarkdown remarkPlugins={[gfm]} children={""} />
        </div>
        <div className="post-btns">
          <button
            onClick={() => setPostFormModalVisibility(false)}
            className="post-form-btn-close "
          >
            Cancel
          </button>
          <button className="post-form-btn btn" onClick={handleTwo}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFormModal;
