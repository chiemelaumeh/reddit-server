import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');
import PostCommentForm from "./PostCommentForm";
import { useState, useContext } from "react";
import CommentReplies from "./CommentReplies";
import RootCommentContext from "../context/RootCommentContext";
import axios from "axios";


<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const Comments = (props) => {
  const [showReplyBox, setShowReplyBox] = useState("wefw");
  const [hideReplyButton, setHideReplyButton] = useState("");
  const rootCommentInfo = useContext(RootCommentContext)





  const postComments = props.postComments.filter(
    (comment) => props.parentId === comment.parentId
  );
  // console.log(postComments)
  // const fetchReplies = async (parentId) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/comments/parent/${parentId}`
  //     );
  //     console.log(response);
  //     setfetchedReplies(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      {postComments.map(singleComment => {

        const replies = props.postComments.filter(loopedComment => loopedComment.parentId === singleComment._id)
        // console.log(replies)
        
        return (
          <div className="comment-div">
            <div className="post-comments"></div>

            <p>{singleComment.author} </p>
            <p className="time-ago-div">
              <TimeAgo datetime={singleComment.postedAt} />
            </p>

            {/* <div> */}
              <div className="comment-body-div">
                {singleComment.body}
                <div>
                  <button
                    className={
                      hideReplyButton ? "hide-comment-reply" : "comment-reply"
                    }
                    onClick={() => setShowReplyBox(singleComment._id)}
                    // onClick={() => setHideReplyButton(!hideReplyButton)}
                  >
                    Reply
                  </button>
                </div>
            {/* </div> */}

              <div>

              {singleComment._id === showReplyBox && (
                <PostCommentForm
                  // title={props.title}
                  parentId={singleComment._id}
                  rootId={props.parentId}
                  title={singleComment.title}
                  showButton={true}
          
                  onCancel={()=>setShowReplyBox("")}
                 

                 
                />
              )}
              </div>
               {replies.length > 0 &&
               <CommentReplies replies={replies} />
               
               
               }

            </div>

            {/* <div className="rule-div">
            <hr />
          </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

console.log(dateTime);
