import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import RerenderContext from "../context/RerenderContext";
import AuthModalContext from "../context/AuthModalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const PostCommentForm = (props) => {
  const [userComment, setUserComment] = useState("");
  const { user } = useContext(UserContext);
  const { setNewComments } = useContext(RerenderContext);
  const { setPostModalVisibility } = useContext(AuthModalContext);

  const postComment = async (e) => {
    e.preventDefault();

    const data = {
      chosenCommunity: props.chosenCommunity,
      title: props.title,
      body: userComment,
      parentId: props.parentId,
      rootId: props.rootId,
    };

    try {
      const response = await axios.post(
        "/comments/",
        data,
        {
          withCredentials: true,
        }
      );
      setUserComment("");
      setNewComments(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const changeUserComment = (e) => {
    setUserComment(e.target.value);
  };

  return (
    <div>
      {props.showAuthor && (
        <div>
          Comment as u/ <p className="my-comment">{user.username}</p>
        </div>
      )}
      <form className="comment-form" onSubmit={postComment}>
        <textarea
          required
          onChange={changeUserComment}
          value={userComment}
        ></textarea>

        <div className="btn-div">
          {props.showButton && (
            <>
              <button
                className=" comment-btn cancel-btn"
                onClick={() => props.setShowReplyBox(null)}
              >
                Cancel
              </button>
              <button className="btn comment-btn">Comment</button>
            </>
          )}

          
          {
            props.showButton === false &&

            <>
{/* 
<Link
          to={"/comments/" + (props.rootId || props._id)}
          state={{ commentId: props.rootId || props._id }}
        >
          <FaRegCommentDots onClick={popUpModal} className={theLightMode} />
        </Link> */}
        <Link
               to="/"
        >
            <button className="comment-btn cancel-btn"
            onClick={()=>setPostModalVisibility(false)}
            // className="btn comment-btn"
          >
            Cancel
          </button>
          </Link>

          <button className="btn comment-btn">Comment</button>
            </>
          }
         
        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
