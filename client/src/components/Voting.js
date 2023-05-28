import React, { useEffect } from "react";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext, { UserProvider } from "../context/UserContext";

const Voting = (props) => {
  const [voteState, setVoteState] = useState(0);
  const [upVotedState, setUpVotedState] = useState(false);
  const [downVotedState, setDownVotedState] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const refreshVotes = async () => {
      const url = `http://localhost:4000/votes/${props.singleComment._id}/`;
      try {
        const response = await axios.get(url);
        setVoteState(response.data);
      } catch (error) {
        console.error(error.message);
      }

    };
    refreshVotes();
  }, [props.singleComment._id]);
  const sendVote = async (direction) => {
    const url = `http://localhost:4000/vote/${props.singleComment._id}/${direction}`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });

      setVoteState(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleVoteUp = () => {
    if (upVotedState === false) {
      sendVote("up");
      setUpVotedState(true);
      setDownVotedState(false);
    }
  };
  const handleVoteDown = () => {
    if (downVotedState === false) {
      if (voteState === 0) return;
      sendVote("down");
      setDownVotedState(true);
      setUpVotedState(false);
    }
  };

  return (
    <div className="voting-div">
      <BiUpvote className="vote-icon" onClick={handleVoteUp} />

      <span className="vote-icon-number">{voteState}</span>
      <BiDownvote className="vote-icon" onClick={handleVoteDown} />
    </div>
  );
};

export default Voting;
