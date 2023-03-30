import React from "react";

const Comments = (props) => {
  const postComments = props.comments.filter(
    (comment) => props.parentID === comment.parentId
  );

  return (
    <div>
      {postComments.map((singleComment) => (
        <div>
          <div className="post-comments"></div>
          {/* {singleComment} */}
        </div>
      ))}
    </div>
  );
};

export default Comments;
