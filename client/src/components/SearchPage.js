import { useParams } from "react-router-dom";
import RerenderContext from "../context/RerenderContext";
import { useState, useEffect, useContext } from "react";
import Redditmain from "./Post";
import axios from "axios";

const SearchPage = (props) => {
  const { text } = useParams();
  const [comments, setComments] = useState([]);
  const { setErrorPage } = useContext(RerenderContext);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(`/comments?search=${text}`, {
        withCredentials: true,
      });

      if (response.data.length === 0) {
        setErrorPage("/error/404");
      } else {
        setComments(response.data);
      }
    };
    getComments();
  }, []);

  return (
    <div className="app-reddit-story">
      {comments.map((comment) => (
        <Redditmain {...comment} key={comment._id} />
      ))}
    </div>
  );
};

export default SearchPage;
