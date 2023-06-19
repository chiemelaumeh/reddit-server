import { useContext, useState } from "react";
import Input from "./Input";
import axios from "axios";
import RedirectContext from "../context/RedirectContext";
import AuthModalContext from "../context/AuthModalContext";
import CommunityContext from "../context/CommunityContext";

const CommunityPopUp = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cover, setCover] = useState("");
  const { setRedirect } = useContext(RedirectContext);
  const { setPostFormModalVisibility } = useContext(AuthModalContext);
  const { setShowCommunity } = useContext(CommunityContext);

  const createCommunity = async () => {
    closeModal();
    const data = { name, slogan, avatar, cover };
    try {
      const response = await axios.post("/communities", data, {
        withCredentials: true,
      });
      setRedirect(`/r/` + name);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="post-modal-page">
      <div className="community-sub">
        <h1>Create a Subreddit </h1>

        <form action="" onSubmit={createCommunity}>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder={"Name"}
            type="text"
            className="input input-box"
          />

          <input
            required
            onChange={(e) => setSlogan(e.target.value)}
            value={slogan}
            placeholder={"Slogan"}
            type="text"
            className="input input-box"
          />

          <input type="file" className="avatar-img" />

          <input type="file" className="avatar-img" />
          <div className="cancel-create">
            <button
              onClick={() => {
                setShowCommunity(false);
                setPostFormModalVisibility(true);
              }}
              className="post-comm "
            >
              Create Post
            </button>
            <button onClick={closeModal} className="cancel-comm ">
              Cancel
            </button>
            <button type="submit" className="create-comm">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityPopUp;
