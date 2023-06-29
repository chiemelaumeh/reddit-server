import React from "react";
 

const ModalContent = (props) => {

  return (
    <div>
      <p>
        {" "}
        Posted by u/{props.author}, posted at: {props.postedAt}{" "}
      </p>
    
      <h1>{props.title}</h1>
      <p className="comments-p">{props.body}</p>
    </div>
  );
};

export default ModalContent;
