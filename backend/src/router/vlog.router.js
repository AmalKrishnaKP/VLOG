import { Router } from "express";
import { addProduct, allProducts } from "../controller/vlog.controller.js";

const router=Router()

router.get("/",allProducts)
router.post("/addProduct",addProduct)

export {router}
