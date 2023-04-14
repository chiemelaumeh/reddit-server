import React from "react";
import TimeAgo from "timeago-react";
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const CommentReplies = (props) => {
  const replies = props.replies;

  return (
    <div className="comment-body-div-reply">
      {replies.map((singleReply, index) => {
        return (
          <div className="reply-main-div" key={index}>
              <div className="profile-timeago">
              <div className="post-comments"></div>
              <p>
                {singleReply.author}
              </p>
              </div>
              <div className="time-ago-div">

                <TimeAgo datetime={singleReply.postedAt} />
              </div>
            <div className="single-reply-div">
              {singleReply.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentReplies;
