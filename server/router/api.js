import express from "express";
import * as MenuListController from "../controller/MenuListController.js";
import { PostController} from "../controller/PostModelController.js";
import EmployeeControl from "../controller/EmployeeController.js"
import ServiceControl from "../controller/ServiceController.js"
const router = express.Router()

router.get("/menulist", MenuListController.MenuList)

router.get("/postlist", PostController)

router.get("/employee", EmployeeControl)

router.get("/service", ServiceControl)



export default router;