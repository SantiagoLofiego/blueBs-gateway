const Router = require('express').Router
const userData = require('../src/userdata').userData

const userRouter = Router()

userRouter.get('/', (req, res, next) => {
  const query = req.query;
  const maxAge = parseInt(query.maxAge) || 200;
  const minAge = parseInt(query.minAge) || 0;
  const response = userData.users.filter((user) => { return user.age >= minAge && user.age <= maxAge })
  res.json({
    status:'OK',
    results: response.length,
    data: response
  })
})

userRouter.get('/:name', (req, res, next) => {
  const userName = req.params.name.toLowerCase();
  console.log(userName)
  const resp = userData.users.find((user) => {
    console.log(user.name);
    return user.name.toLowerCase() === userName
  })

  if (!resp) {
    next({ error: 'user not found', status: 500 })
  } else {
    res.send(resp)
  }
})

userRouter.post('/', (req, res, next) => {
  const body = req.body;
  if (body.name && body.password && body.age) {
    const newUser = { name: body.name, password: body.password, age: body.age }
    if (userData.users.find((user) => user.name === newUser.name)) {
      next({ error: 'user already exist', status: 409 });
    } else {
      userData.users.push(newUser);
      res.status(201)
      res.send({ status: 'ok', user: newUser })
    }
  } else {
    next({ error: 'missing fields', status: 400 })
  }
})

module.exports = userRouter;