import express from "express";
import { getProducts, getProductById } from "../controller/productController.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send(products);
// })
// router.get("/", asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     throw new Error("Resouse Not Found");
//     res.json(products);
// }));

// router.get("/:id", asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//         res.json(product);
//     } else{
//         res.status(404).json({ message: "Product Not Found" });
//         throw new Error("Resouse Not Found");
//     }
     
//     res.status(404).json({ message: "Product Not Found" });
// }));
//controller ekak hdla tyna nisa uda tika oni na

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);


export default router;