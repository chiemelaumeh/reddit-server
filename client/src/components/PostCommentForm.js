import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import RerenderContext from "../context/RerenderContext";
import axios from "axios";
import CommunityContext from "../context/CommunityContext";


const PostCommentForm = (props) => {
  
  const [userComment, setUserComment] = useState("");
  const { user } = useContext(UserContext);
  const { chosenCommunity } = useContext(CommunityContext)

  const { setNewComments } = useContext(RerenderContext);

  
 



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
        "http://localhost:4000/comments/",
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
      {props.showAuthor && <div>Comment as {user.username}</div>}
      <form className="comment-form" onSubmit={postComment}>
        <textarea
        
           required
          onChange={changeUserComment}
          value={userComment}
          placeholder="Your comment. You can use Markdown here"
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

          {props.showButton === false && (
            <button className="btn comment-btn">Comment</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostCommentForm;
