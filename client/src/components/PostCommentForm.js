import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useEffect } from "react";

const PostCommentForm = (props) => {
  const [userComment, setUserComment] = useState("");
  const { user, setUser } = useContext(UserContext);

  const postComment = async (e) => {
    e.preventDefault();
    const data = {
      title: props.title,
      body: userComment,
      parentId: props.parentId,
      rootId: props.rootId,
    };
    try {
      const response = axios.post("http://localhost:4000/comments/", data, {
        withCredentials: true,
      });
      setUserComment("")
    } catch (err) {
      console.error(err.message);
    }
  };
// useEffect(() => {

//   const getPostComments = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:4000/comments/` + props.modalComment._id,
//         { withCredentials: true }
//       );

//       console.log("response.data");

//       props.setPostComments(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   getPostComments();
// }, [props.modalComment_id])


 
  const changeUserComment = (e) => {
    setUserComment(e.target.value);
  };

  return (
    <div>
      {props.showAuthor  && (
        <div>Comment as {user.username}</div>
      )}
      <form className="comment-form" onSubmit={postComment}>
        <textarea
         required
          onChange={changeUserComment}
          value={userComment}
          placeholder="Your comment. You can use Markdown here"
        ></textarea>

        <div className="btn-div">
          {props.showButton && (
            // <div className="comment-cancel-btn">
            <>
              <button
                className=" comment-btn cancel-btn"
                onClick={() => props.onCancel()}
              >
                Cancel
              </button>
              <button
                className="btn comment-btn"
                onClick={postComment}
                
              >
              
                Comment
              </button>
            </>
            // </div>
          )}

          {/* {props.showButton && (
            <button className="btn comment-btn">Post Reply</button>
          )} */}
          {props.showButton === false && (
            <button className="btn comment-btn">Comment</button>
          )} 
            {/* <button className="btn comment-btn">Comment</button> */}

        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
