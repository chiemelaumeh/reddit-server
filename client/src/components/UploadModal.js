import React from "react";

import { useContext, useState, useEffect } from "react";
import ImageComponent from "./ImageComponent";
import UserContext from "../context/UserContext";
import axios from "axios";
import userImage from "../images/user.jpg";
import AuthModalContext from "../context/AuthModalContext";
import OutsideClickHandler from "react-outside-click-handler";
const UploadModal = () => {
  const {
    openUpload,
    setOpenUpload,
    previewSource,
    setPreviewsource,
    setUploadedImage,
  } = useContext(AuthModalContext);
  const { user } = useContext(UserContext);
  // console.log(user)

  const [fileInputState, setFileInputState] = useState("");

  useEffect(() => {
    const showImage = async () => {
      try {
        const data = { user };
        const response = await axios.post("/image/", data, {
          withCredentials: true,
        });
        setUploadedImage(response.data);

      } catch (error) {
        console.error(error);
      }
    };
    showImage();
  }, [user]);

  
  const handlefileInputState = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewsource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    // console.log("ssubsf")
    e.preventDefault();
    if (!previewSource) return;

    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    const data = { base64EncodedImage, user };
    // console.log(data)
    try {
      const response = await axios.post("/upload/", data);
      setUploadedImage(response.data);
      // console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={openUpload ? "upload-page" : "hide-upload-page"}>
      <OutsideClickHandler onOutsideClick={() => setOpenUpload(false)}>
        <div className="upload-sub">
          <div className="image-div">
            {/* {
              previewSource && ( */}
            <img
              className="main-image"
              src={previewSource ? previewSource : userImage}
              alt="chosen"
            />

            {/* )
            } */}
          </div>

          <form action="" onSubmit={handleSubmitFile} className="image-form">
            <div>
              <input
              className="image-file"
                type="file"
                onChange={handlefileInputState}
                value={fileInputState}
              />
              <button
                className="image-btn"
                type="submit"
                onClick={() => {
                  setOpenUpload(false);
                }}
              >
                upload
              </button>
            </div>
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default UploadModal;