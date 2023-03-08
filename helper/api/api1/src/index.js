const express = require('express')
const axios = require('axios').default;
const Router = express.Router
const userRouter = require('./user.routes')

const errorHandler = require('./errorMiddle')
const router = Router();
const server = express();
const register = process.argv.find(el => el.includes('-r')) ? true : false;
const port = parseInt(process.argv.find(el => el.includes('-port'))?.split('=')[1]) || 3001;
console.log(port, register)

router.use('/users', userRouter);
server.use(express.json())
server.use(router);
server.use(errorHandler)
server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

//service register
function gatewayRegistration() {
  const gatewayURL = 'http://localhost:3000/microservices/user';
  axios.post(gatewayURL,
    {
      protocol: 'http',
      ip: 'localhost',
      port: port.toString(),
      status: 'online'
    })
    .then(resp => console.log(resp.data))
    .catch(error => console.log(error.response.data));
}


if (register) {
  gatewayRegistration();
}


