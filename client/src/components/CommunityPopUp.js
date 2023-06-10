import { useContext, useState } from "react";
import Input from "./Input";
import axios from "axios";
import RedirectContext from "../context/RedirectContext";


const CommunityPopUp = ({ closeModal }) => {

  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cover, setCover] = useState("");
  const { redirect, setRedirect} = useContext(RedirectContext)

  const createCommunity = async () => {
    closeModal()
    const data = { name, slogan, avatar, cover };
    try {
      const response = await axios.post("/communities", data, {
        withCredentials: true,
      });
      setRedirect(`/r/` + name )
    } catch (error) {
      console.error(error.message)
    }
  };
  return (
    <div className="community-sub">
      <h1>Create a Subreddit </h1>

      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder={"Name"}
      />
      <Input
        onChange={(e) => setSlogan(e.target.value)}
        value={slogan}
        placeholder={"Slogan"}
      />
      <Input
        onChange={(e) => setAvatar(e.target.value)}
        value={avatar}
        placeholder={"Avatar"}
      />
      <Input
        onChange={(e) => setCover(e.target.value)}
        value={cover}
        placeholder={"Cover"}
      />
      <div className="post-btns">
        <button onClick={closeModal} className="post-form-btn-close ">
          Cancel
        </button>
        <button onClick={createCommunity} className="post-form-btn btn">Create subreddit!</button>
        {/* <button className="post-form-btn "> Create your Subreddit!</button> */}
      </div>
    </div>
  );
};

export default CommunityPopUp;
