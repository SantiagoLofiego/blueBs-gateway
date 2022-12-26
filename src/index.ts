import express, {Request, Response} from "express";

const server = express();

server.use(express.json());

server.all("/api", (req:Request, resp:Response)=>{
  console.log(req.socket.address())
  resp.send("Api response service")
})

server.listen(3005, ()=>{
  console.log("server listen on port 3005")
})

