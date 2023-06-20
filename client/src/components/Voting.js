import React, { useEffect } from "react";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import AuthModalContext from "../context/AuthModalContext";

const Voting = ({ props }) => {
  const [voteState, setVoteState] = useState(0);
  const [upVotedState, setUpVotedState] = useState(false);
  const [downVotedState, setDownVotedState] = useState(false);
  const { user } = useContext(UserContext);
  const { setModalVisibility } = useContext(AuthModalContext);

  const sendVote = async (direction, hasVotedUp, hasVotedDown) => {
    const url = `/votes/${props._id}/${user.username}/${direction}/${hasVotedUp}/${hasVotedDown}`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      setVoteState(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {

    const refreshVotes = async () => {
      const url = `/votes/${props._id}/`;
      try {
        const response = await axios.get(url);
        setVoteState(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    refreshVotes();
  }, [voteState]);


  const handleVoteUp = () => {
    if (!user.username) {
      setModalVisibility(true);
    }
    if (upVotedState === false) {
      setUpVotedState(true);
      sendVote("up","true","false");
      
      setDownVotedState(false);
    }
  };
  const handleVoteDown = () => {
    if (!user.username) {
      setModalVisibility(true);
    }

    if (downVotedState === false) {
      if (voteState === 0) return;
      sendVote("down", "false","true");
      setDownVotedState(true);
      setUpVotedState(false);
    }
  };
  return (
    <div className="voting-div">
      <BiUpvote id={props._id} className="vote-icon" onClick={handleVoteUp} />

      <span className="vote-icon-number">{voteState}</span>
      <BiDownvote id={props._id} className="vote-icon" onClick={handleVoteDown} />
    </div>
  );
};

export default Voting;