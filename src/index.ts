import config from "./config";
import server from "./rest-server";

const main = () => {
  server.run(config.server.port || 3000)
};

main();
