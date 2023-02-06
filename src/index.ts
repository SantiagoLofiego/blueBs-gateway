import config from "./config";
import DiContainer from "./config/DI/DiContainer";
import { Server } from "./rest-server/server/server";

const main = () => {
  const context = new DiContainer();
  context.get<Server>("Server").run(config.server.port);
};

main();
