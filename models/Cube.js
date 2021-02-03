const Model = require("./Model")
const productsDb = require("../config/products.json")

class Cube extends Model {
  constructor(id, name, description, imageUrl, level) {
    this.id = id
    this.name = name
    this.description = description
    this.imageUrl = imageUrl
    this.level = level
  }

  save() {
    productsDb.push(this)

    return fs.writeFile(
      path.join(__dirname, "/../config/products.json"),
      JSON.stringify(productsDb)
    )
  }
}

module.exports = Cube
