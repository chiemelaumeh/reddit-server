import { useState, createContext } from "react";

const AuthModalContext = createContext();
export const AuthModalProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [postModalVisibility, setPostModalVisibility] = useState(false)
  const [postFormModalVisibility, setPostFormModalVisibility] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [allCommunities, setAllCommunities] = useState([])
  const [showEditandDelete, setShowEditandDelete] = useState(false)
  const [showOneBox, setShowOneBox] = useState(null)
  return (
    <AuthModalContext.Provider value={{ modalVisibility, setModalVisibility,postModalVisibility,
     setPostModalVisibility, postFormModalVisibility, setPostFormModalVisibility, lightMode,
      setLightMode, allCommunities, setAllCommunities,showEditandDelete, setShowEditandDelete,
       showOneBox, setShowOneBox}}>
      {children}
    </AuthModalContext.Provider>
  );

};
export default AuthModalContext;
