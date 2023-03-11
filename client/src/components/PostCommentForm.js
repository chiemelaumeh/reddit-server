import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import TextArea from "./TextArea";

const PostCommentForm = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      {user.username && <div>Comment as {user.username}</div>}
      <form>
        <div className="comment-sub">
          <TextArea />
        </div>
        <button className="btn">Comment</button>
      </form>
    </div>
  );
};

export default PostCommentForm;
