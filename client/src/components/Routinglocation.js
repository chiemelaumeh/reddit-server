import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Commentpage from "./Commentpage";
import { useLocation } from "react-router-dom";


const Routinglocation = () => {
  return (

    <Routes>
        {console.log(useLocation())}

  
        <Route exact path="/" element={<Board />} />
        <Route exact path="/comments/:id" element={<Commentpage />} />
      </Routes>
 
  )
}

export default Routinglocation