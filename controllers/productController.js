const { Router } = require("express")
const productService = require("../services/productService")
const router = Router()

router.get("/", (req, res) => {
  res.render("home", { title: "Browse" })
})

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" })
})

router.post("/create", (req, res) => {
  // validate inputs dont input req.body into cube directly but 1 by 1
  productService.create(req.body)

  res.redirect("/products")
})

router.get("/details/:productId", (req, res) => {
  console.log(req.params.productId)

  res.render("details", { title: "Product Details" })
})

module.exports = router
