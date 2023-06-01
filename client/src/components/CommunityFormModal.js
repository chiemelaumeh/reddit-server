import { useState, useContext } from "react"
import CommunityContext from "../context/CommunityContext"

const CommunityFormModal = () => {
const { showCommunity, setShowCommunity } = useContext(CommunityContext)

if (!showCommunity) {
  return null
}
  return (
    <div>CommunityFormModal</div>
  )
}

export default CommunityFormModal