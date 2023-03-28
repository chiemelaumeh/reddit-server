import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

const PostCommentForm = () => {
  const [userComment, setUserComment] = useState("");
  const { user, setUser } = useContext(UserContext);

  const postComment = async () => {
    const data = { user, userComment, parentId:0, rootId:0};
    try {
      const response = axios.post("http://localhost:4000/comments/", data, {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err.message)
    }
  };

  const changeUserComment = (e) => {
    setUserComment(e.target.value);
  };

  return (
    <div>
      {user.username && <div>Comment as {user.username}</div>}
      <form className="comment-form">
        <textarea
          onChange={changeUserComment}
          value={userComment}
          placeholder="Your comment. You can use Markdown here"
        ></textarea>

        <div className="btn-div">
          <button className="btn comment-btn" onClick={postComment}>Comment</button>
        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
