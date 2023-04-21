import { Routes, Route, useLocation } from "react-router-dom";
import Board from "./Board";
import Commentpage from "./Postpage";
import Postmodal from "./Postmodal";
import SearchPage from "./SearchPage";

const Routinglocation = () => {
  let location = useLocation();
  let commentId = null;

  if (location.state && location.state.commentId) {
    location.pathname = "/";
    commentId = location.state.commentId;
  }
  // console.log(location)
  return (
    <div>
      {commentId && (
        <div>
          <Postmodal id={commentId} open={true}/>
          {/* { commentId} */}
        </div>
      )}
      <Routes location={location}>
        <Route exact path="/" element={<Board />} />
        <Route exact path="/comments/:id" element={<Commentpage />} />
        <Route exact path="/search/:text" element={<SearchPage />}/>
      </Routes>
    </div>
  );
};

export default Routinglocation;