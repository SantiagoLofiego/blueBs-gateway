import config from "./config";
import container from "./config/context";
import { Server } from "./rest-server/server/server";

const main = () => {
  container.get<Server>("server").run(config.server.port || 3000);
};

main();
