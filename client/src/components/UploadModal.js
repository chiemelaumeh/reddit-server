import Input from "./Input";
import { useContext, useState } from "react";
import axios from "axios";
import user from "../images/user.jpg";
import AuthModalContext from "../context/AuthModalContext";
import OutsideClickHandler from "react-outside-click-handler";

const UploadModal = () => {
  const { openUpload, setOpenUpload } = useContext(AuthModalContext);

  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewsource] = useState()

  const handlefileInputState = (e) => {
    const file = e.target.files[0];
    previewFile(file)
  };

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewsource(reader.result)
    }
  }

  const handleSubmitFile = (e) => {
    // console.log("ssubsf")
    e.preventDefault()
    if(!previewSource) return;

   
    uploadImage(previewSource)

  }

  const uploadImage = async(base64EncodedImage) => {
    const data = {base64EncodedImage}
    // console.log(data)
    try {
      const response = await axios.post("http://localhost:4000/upload/", data)

      
    } catch (error) {
      console.error(error)
      
    }

  }
  return (
    <div className={openUpload ? "upload-page" : "hide-upload-page"}>
      <OutsideClickHandler onOutsideClick={() => setOpenUpload(false)}>
        <div className="upload-sub">
          <div className="image-div">
            {/* {
              previewSource && ( */}
                <img className="main-image" src={previewSource ? previewSource : user} alt="chosen" />
                
              {/* )
            } */}
          </div>

          <form action="" onSubmit={handleSubmitFile} className="image-form">
            <input
              type="file"
              name="image"
              onChange={handlefileInputState}
              value={fileInputState}
            />
            <button className="btn" type="submit">
              upload
            </button>
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default UploadModal;
