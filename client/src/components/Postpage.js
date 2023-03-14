import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Redditmain from "./Post";

const Commentpage = () => {
  const { id } = useParams();


  const [comment, setComment] = useState(null);
  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await axios.get(
          // `https://redditt-api.onrender.com/comments/${id}`,
          `http://localhost:4000/comments/${id}`,
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
  }, []);

  return (
    <div className="comment-main">
      {" "}
      {comment && <Redditmain {...comment} open={false} />}
    </div>
  );
};

export default Commentpage;