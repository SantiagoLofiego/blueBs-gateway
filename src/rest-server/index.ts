import routes from "./routes";
import { Server } from "./server/server";


const server = Server.getInstance();
server.routes(routes)

export default server;