const uniqid = require("uniqid")
const Cube = require("../models/Cube")
const fs = require("fs").promises
const path = require("path")
let productsData = require("../config/products.json")

function getAll(query) {
  let result = productsData

  if (query.search) {
    result = productsData.filter((x) =>
      x.name.toLowerCase().includes(query.search.toLowerCase())
    )
  }

  if (query.from) {
    result = result.filter((x) => Number(x.level) >= query.from)
  }

  if (query.to) {
    result = result.filter((x) => Number(x.level) <= query.to)
  }
  return result
}

function getOne(id) {
  return productsData.find((x) => x.id == id)
}

function createProduct(data, callback) {
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

  // fs.writeFile(
  //   path.join(__dirname, "/../config/products.json"),
  //   JSON.stringify(productsData),
  //   callback
  // )

  return fs.writeFile(
    path.join(__dirname, "/../config/products.json"),
    JSON.stringify(productsData)
  )
}

module.exports = {
  create: createProduct,
  getAll,
  getOne,
}
