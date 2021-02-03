const uniqid = require("uniqid")
const Cube = require("../models/Cube")
const fs = require("fs")
const path = require("path")
let productsData = require("../config/products.json")

function getAll() {
  return productsData
}

function getOne(id) {
  return productsData.find((x) => x.id == id)
}

function createProduct(data) {
  let cube = new Cube(
    uniqid(),
    data.name,
    data.description,
    data.imageUrl,
    data.difficultyLevel
  )

  productsData.push(cube)

  // console.log(path.join(__dirname, "/../config/products.json"))
  // console.log(path.resolve("/../config/products.json"))

  fs.writeFile(
    path.join(__dirname, "/../config/products.json"),
    JSON.stringify(productsData),
    (err) => {
      if (err) {
        console.log(err)
        return
      }
    }
  )
}

module.exports = {
  create: createProduct,
  getAll,
  getOne,
}
