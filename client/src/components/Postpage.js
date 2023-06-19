import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Redditmain from "./Post";

const Commentpage = () => {
  const { id } = useParams();


  const [comment, setComment] = useState(null);

    const getComment = async () => {
      try {
        const response = await axios.get(
          `/comments/${id}`,
          {
            withCredentials: true,
          }
        );
        setComment(response.data)
     
      } catch (error) {
        console.log(error.message);
      }
    };
    getComment();

  return (
    <div className="comment-main">
      {" "}
       <Redditmain {...comment}  />
    </div>
  );
};

export default Commentpage;