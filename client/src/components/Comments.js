import React from "react";

const Comments = (props) => {
  const postComments = props.postComments.filter(
    (comment) => props.parentId === comment.parentId
  );

  return (
    <div>
      {postComments.map((singleComment) => (
        <div>
          <div className="post-comments"></div>
          {singleComment.author}
          
           {singleComment.body} 
       
          
        </div>
       ))} 
    </div>
  );
};

export default Comments;
