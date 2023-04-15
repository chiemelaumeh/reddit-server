import express from "express"
const router = express.Router()
import {getUserFromToken} from "../UserFunctions.js"




  router.get("/vote/:commentId/:direction/", async(req, res)=> {
    const token = req.cookies.token
    const handleVoting = async()=> {

      try {
        const userInfo = await getUserFromToken(token)
        res.json(userInfo)
   
     
      } catch (error) {
       console.error(error.message)
      }
     
    }
   handleVoting()
  })



export default router