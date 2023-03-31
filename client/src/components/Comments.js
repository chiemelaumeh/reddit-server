import React from "react";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');
import PostCommentForm from "./PostCommentForm";

<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const Comments = (props) => {
  const postComments = props.postComments.filter(
    (comment) => props.parentId === comment.parentId
  );

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
              <button className="comment-reply">Reply</button>
            </div>
          <PostCommentForm />
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
