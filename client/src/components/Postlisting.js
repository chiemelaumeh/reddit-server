import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Redditmain from "./Post";
import RerenderContext from "../context/RerenderContext";
import CommunityContext from "../context/CommunityContext";

const Postlisting = () => {
  const [comments, setComments] = useState([]);
  const { newPosts } = useContext(RerenderContext);
  const { chosenCommunity } = useContext(CommunityContext);


  let url = chosenCommunity === null ? "/comments" : `/comments?community=${chosenCommunity}`;


  useEffect(() => {
    const getComments = async () => {
      console.log(url)
      const response = await axios.get(url, {
        withCredentials: true,
      });

      setComments(response.data);
    };
    getComments();
  }, [newPosts,chosenCommunity]);

  return (
    <div className="app-reddit-story">
      {comments.map((comment) => (
        <Redditmain {...comment} key={comment._id} />
      ))}
    </div>
  );
};

export default Postlisting;
