exports.validateProduct = (req, res, next) => {
  let isValid = true
  let err = ""

  if (req.body.name.trim().length < 2) {
    isValid = false
    err = "no name entered"
  } else if (req.body.imageUrl.trim().length < 2) {
    isValid = false
    err = "no image entered"
  }

  if (isValid) {
    next()
  } else {
    console.log(err)
  }
}
