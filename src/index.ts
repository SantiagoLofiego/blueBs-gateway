import { Server } from "./rest-server/server/server";

const main = async () => {
  const server = new Server(3000);
  await server.run();
};

main();
