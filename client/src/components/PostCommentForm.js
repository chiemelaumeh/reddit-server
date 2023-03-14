import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import TextArea from "./TextArea";

const PostCommentForm = () => {
  const [userComment, setUserComment] = useState("")
  const { user, setUser } = useContext(UserContext);
 
  const changeUserComment =(e)=> {
    setUserComment(e.target.value)

  }

  return (
    <div>
      {user.username && <div>Comment as {user.username}</div>}
      <form className="comment-form">
        <textarea onChange={changeUserComment} value={userComment} placeholder="Your comment. You can use Markdown here"></textarea>

        <div className="btn-div">
          <button className="btn comment-btn">Comment</button>
        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
