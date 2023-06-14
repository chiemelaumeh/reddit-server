import { useState, useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import RerenderContext from "../context/RerenderContext";
import RedirectContext from "../context/RedirectContext";
import Input from "./Input";
import TextArea from "./TextArea";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import axios from "axios";
import CommunityContext from "../context/CommunityContext";

const PostFormModal = () => {
  const { setRedirect } = useContext(RedirectContext);
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const changeState = (e) => {
    setSelectedCommunity(e.target.value);
  };

  const {
    postFormModalVisibility,
    setPostFormModalVisibility,
    allCommunities,
    setAllCommunities,
  } = useContext(AuthModalContext);

  const { setNewPosts } = useContext(RerenderContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const data = { title, body, selectedCommunity };

  const createPost = async () => {
    if (title.length === 0 || body.length === 0) {
      alert("Post title and body required");

      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/comments/",
        data,
        { withCredentials: true }
      );

      setNewPosts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  function handleTwo() {
    createPost();
    if (selectedCommunity) {
      setRedirect("/r/" + selectedCommunity);
      setPostFormModalVisibility(false);
    } else {
      alert("Please choose a community");
    }
    setTitle("");
    setBody("");
  }
  return (
    <div
      className={
        postFormModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <div className="post-modal-sub">
        <h3>Create a Post</h3>
        <Input
          required
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextArea
          placeholder={"Text (required)"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <div>
          <ReactMarkdown remarkPlugins={[gfm]} children={""} />
        </div>
        <div className="dropdown-div">
          <div className="dropdown">
            <select
              className="selector"
              onChange={
                changeState

                // (e) => { const c = allCommunities?.find((x) => x.id === e.target.value)
                //   console.log(c)
                // }
              }
            >
              <option required value="default">
                {" "}
                Please choose a community
              </option>
              {allCommunities
                ? allCommunities.map((oneCommunity) => {
                    return (
                      <option key={oneCommunity.name} value={oneCommunity.id}>
                        {oneCommunity.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>

          <div className="post-btns">
          <button className="post-form-btn btn" onClick={handleTwo}>
              POST
            </button>
            <button
              onClick={() => {
                setPostFormModalVisibility(false);
                setAllCommunities([]);
              }}
              className="post-form-btn-close "
            >
              Cancel
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFormModal;
