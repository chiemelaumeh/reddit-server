import React from "react";
import TimeAgo from "timeago-react";
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const CommentReplies = (props) => {
  const replies = props.replies;

  return (
    <div className="comment-body-div-reply">
      {replies.map((singleReply) => {
        return (
          <div className="reply-main-div">
              <p>
                <TimeAgo datetime={singleReply.postedAt} />
              </p>
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
