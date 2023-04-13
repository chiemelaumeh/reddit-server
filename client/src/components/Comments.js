import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');
import PostCommentForm from "./PostCommentForm";
import { useState } from "react";
import CommentReplies from "./CommentReplies";


<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const Comments = (props) => {
  const [showReplyBox, setShowReplyBox] = useState(null);
  const postComments = props.postComments.filter(
    (comment) => props.parentId === comment.parentId
  );

  return (
    <div>
      {postComments.map((singleComment) => {
        const replies = props.postComments.filter(
          (loopedComment) => loopedComment.parentId === singleComment._id
        );

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

              {/* {showReplyBox === null && ( */}
                <div>
                  <button
                    className="comment-reply"
                    onClick={() => setShowReplyBox(singleComment._id)}
                  >
                    Reply
                  </button>
                </div>
              {/* )} */}

              <div>
                {singleComment._id === showReplyBox && (
                  <PostCommentForm
                    // title={props.title}
                    parentId={singleComment._id}
                    rootId={props.parentId}
                    title={singleComment.title}
                    showButton={true}
                    setShowReplyBox={setShowReplyBox}
                  />
                )}
              </div>
              {replies.length > 0 && <CommentReplies replies={replies} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Comments;
