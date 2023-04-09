import { useState, createContext } from "react";

const RootCommentContext = createContext()
export const RootCommentProvider = ({children})=> {



  return(
    <RootCommentContext.Provider value={{}}>
    {children}
    </RootCommentContext.Provider>
  )
} 

export default RootCommentContext