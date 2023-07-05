import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Board from "./Board";
import Commentpage from "./Postpage";
import Postmodal from "./Postmodal";
import SearchPage from "./SearchPage";
import ErrorPage from "./ErrorPage";
import EmailVerify from "./EmailVerify";
import EmailVerified from "./EmailVerified";

const Routinglocation = () => {
  let location = useLocation();
  let commentId = null;

  if (location.state && location.state.commentId) {
    location.pathname = "/";
    commentId = location.state.commentId;
  }

  return (
    <div>
      {commentId && (
        <div>
          <Postmodal id={commentId} open={true} />
        </div>
      )}
      <Routes location={location}>
        <Route exact path="/" element={<Board />} />
        <Route exact path="/r/:communityFromUrl" element={<Board />} />
        <Route exact path="/comments/:id" element={<Commentpage />} />
        <Route exact path="/search/:text" element={<SearchPage />} />
        <Route exact path="/error/404" element={<ErrorPage />} />
        <Route exact path="/users/:id/verify/:token" element={<EmailVerify />}/>
        <Route exact path="/emailverified" element={<EmailVerified />}/>
        <Route exact path="/*" element={<ErrorPage />}/>

      </Routes>
    </div>
  );
};

export default Routinglocation;
