import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Commentpage from "./Commentpage";
import { useLocation } from "react-router-dom";

const Routinglocation = () => {
  let location = useLocation();
  console.log(location);
  return (
    <Routes location={location}>
      <Route exact path="/" element={<Board />} />
      <Route exact path="/comments/:id" element={<Commentpage />} />
    </Routes>
  );
};

export default Routinglocation;
