import config from ".";
import { Server } from "../rest-server/server/server";
import DiContainer from "./DI/DiContainer";

const container = new DiContainer();

container.registerInstance("server", Server.getInstance());

export default container;
