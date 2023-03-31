import React from "react";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');
import PostCommentForm from "./PostCommentForm";
import { useState } from "react";

<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const Comments = (props) => {
  const [showReplyBox, setShowReplyBox] = useState(false);

  const postComments = props.postComments.filter(
    (comment) => props.parentId === comment.parentId
  );

  // const toggleBox = () => {
  //   if (showReplyBox === false) {
  //     setShowReplyBox(!showReplyBox);

  //   }
  // };

  return (
    <div>
      {postComments.map((singleComment) => (
        <div className="comment-div">
          <div className="post-comments"></div>

          <h3>{singleComment.author}, </h3>
          <p>
            <TimeAgo datetime={singleComment.postedAt} />
          </p>

          <div className="comment-body-div">
            {singleComment.body}

            <div>
              <button
                className="comment-reply"
                onClick={() => setShowReplyBox(singleComment._id)}
              >
                Reply
              </button>
            </div>
            {singleComment._id === showReplyBox && (
              <PostCommentForm
               parentId = {singleComment._id}
               rootId={props.parentId}
                showButton={true}
                onCancel={() => setShowReplyBox(false)}
              />
            )}
          </div>

          {/* <div className="rule-div">
            <hr />
          </div> */}
        </div>
      ))}
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
