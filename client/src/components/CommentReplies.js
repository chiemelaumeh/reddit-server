import React from 'react'

const CommentReplies = (props) => {
  

   const replies = props.replies

   
  
  return (
    <div>
      {replies.map(singleReply =>{
        return (
          <div>
            {singleReply.body}
          </div>

        )
      })}
     
   
    </div>
  )
}

export default CommentReplies