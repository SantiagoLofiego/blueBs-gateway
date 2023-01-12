import express, {Request, Response} from "express";
import config from './config'



const server = express();
server.use(express.json());


server.all("/api/:value", (req:Request, resp:Response)=>{
  console.log(req.socket.address())
  
  resp.send(`Response from api with ${req.params.value} param`)
})
server.listen(config.server.port, ()=>{
  console.log(`Server running on port ${config.server.port}`)
})

