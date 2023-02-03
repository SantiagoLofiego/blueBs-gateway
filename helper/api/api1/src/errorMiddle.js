const errorHandler = (err, req, res, next) => {
  console.log(err)
  res.status(err.status)
  res.send({error: err.error, status: err.status})
}

module.exports = errorHandler