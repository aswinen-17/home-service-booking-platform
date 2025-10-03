import express from "express"
import { addService, listService, removeService } from "../controllers/serviceController.js"
import multer from "multer"

const serviceRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
      return cb(null,`${Date.now()}${file.originalname}`)
  }
})

const upload = multer({storage:storage})

serviceRouter.post("/add",upload.single("image"),addService)
serviceRouter.get("/list",listService)
serviceRouter.post("/remove",removeService);




export default serviceRouter;