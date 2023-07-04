import { useState, createContext } from "react";

const AuthModalContext = createContext();
export const AuthModalProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [postModalVisibility, setPostModalVisibility] = useState(false);
  const [postFormModalVisibility, setPostFormModalVisibility] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [allCommunities, setAllCommunities] = useState([]);
  const [showEditandDelete, setShowEditandDelete] = useState(false);
  const [showOneBox, setShowOneBox] = useState(null);
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);
  const [confirmDeleteVisibility, setConfirmDeleteVisibility] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [previewSource, setPreviewsource] = useState();
  const [uploadedImage, setUploadedImage] = useState("");
  const [avatarString, setAvatarString] = useState("");
  const [coverString, setCoverString] = useState("");
  const [forgotModalVisibility, setForgotModalVisibility] = useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        modalVisibility,
        setModalVisibility,
        postModalVisibility,
        setPostModalVisibility,
        postFormModalVisibility,
        setPostFormModalVisibility,
        lightMode,
        setLightMode,
        allCommunities,
        setAllCommunities,
        showEditandDelete,
        setShowEditandDelete,
        showOneBox,
        setShowOneBox,
        deleteModalVisibility,
        setDeleteModalVisibility,
        confirmDeleteVisibility,
        setConfirmDeleteVisibility,
        openUpload,
        setOpenUpload,
        previewSource,
        setPreviewsource,
        uploadedImage,
        setUploadedImage,
        forgotModalVisibility,
        setForgotModalVisibility,
        avatarString,
        setAvatarString,
        coverString,
        setCoverString,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
export default AuthModalContext;
