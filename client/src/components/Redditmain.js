import { Link } from "react-router-dom";

const Redditmain = (props) => {
  return (
    <>
      <div className="main-story">
    
        <Link to={`/comments/${props._id}`}  state={{commentId:props._id}}   className={props.open ? "reddit-story-closed" : "reddit-story"}>
          <h5> Posted by u/{props.author}, posted at: {props.postedAt} </h5>
          <h2>{props.title}</h2>
          <div>
            {props.body}
              
          </div>
        </Link>
      </div>
    </>
  );
};

export default Redditmain;


//git add .
