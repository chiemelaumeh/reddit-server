import React from "react";

const Comments = (props) => {
  const postComments = props.postComments.filter(
    (comment) => props.parentId === comment.parentId
  );

  return (
    <div >
      {postComments.map((singleComment) => (
        <div className="comment-div">
          <div className="post-comments"></div>
          
          <h3>
          {singleComment.author} said:
          </h3>

          <div>

           {singleComment.body} 
          </div>
       
          
        </div>
       ))} 
    </div>
  );
};

export default Comments;
