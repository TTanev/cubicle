const express = require("express")
const handlebars = require("express-handlebars")
const config = require("./config/config")
const app = express()

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
  })
)

app.use(express.static("public"))

app.set("view engine", "hbs")

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(config.PORT, () =>
  console.log(`Server is running on port ${config.PORT}...`)
)
