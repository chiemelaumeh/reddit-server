import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

const PostCommentForm = (props) => {
  const [userComment, setUserComment] = useState("");
  const { user, setUser } = useContext(UserContext);


  const postComment = async (e) => {
   e.preventDefault()
    const data = { title:props.title, body:userComment, parentId:props._id, rootId:props.rootId};
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
      {props.showAuthor && <div>Comment as {user.username}</div>}
      <form className="comment-form" onSubmit={postComment} >
        <textarea
          onChange={changeUserComment}
          value={userComment}
          placeholder="Your comment. You can use Markdown here"
        ></textarea>

        <div className="btn-div">
          <button className="btn comment-btn"  >Comment</button>
        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
