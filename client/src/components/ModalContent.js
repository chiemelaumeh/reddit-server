import React from "react";
 

const ModalContent = (props) => {

  return (
    <div>
      <h5>
        {" "}
        Posted by u/{props.author}, posted at: {props.postedAt}{" "}
      </h5>
    
      <h2>{props.title}</h2>
      <div>{props.body}</div>
    </div>
  );
};

export default ModalContent;
