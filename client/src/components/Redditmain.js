import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import Postcontent from "./Postcontent";

const Redditmain = (props) => {
  const { postModaVisibility, setPostModalVisibility } = useContext(AuthModalContext);

  return (
    <>
      <div className="main-story">
        
    
        <Link to={`/comments/${props._id}`}  state={{commentId:props._id}}   className={props.open ? "reddit-story-closed" : "reddit-story"} onClick={()=>setPostModalVisibility(true)}>
        <Postcontent {...props} />
        </Link>
      </div>
    </>
  );
};

export default Redditmain;


//git add .
