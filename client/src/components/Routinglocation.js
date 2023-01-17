import { Routes, Route, useLocation } from "react-router-dom";
import Board from "./Board";
import Commentpage from "./Commentpage";

const Routinglocation = () => {
  let location = useLocation();
  let commentId = null;

  if (location.state && location.state.commentId) {
    location.pathname = "/";
    commentId = location.state.commentId;
  }
  console.log(location);
  return (
    <div>
      {commentId && (<div>WE HAVE COMMENT ID: {commentId}</div>)}

      <Routes location={location}>
        <Route exact path="/" element={<Board />} />
        <Route exact path="/comments/:id" element={<Commentpage />} />
      </Routes>
    </div>
  );
};

export default Routinglocation;
