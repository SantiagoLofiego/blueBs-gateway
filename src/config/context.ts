import config from ".";
import { Server } from "../rest-server/server/server";
import DiContainer from "./DI/DiContainer";

const context = new DiContainer();
context.registerInstance("server", Server);

export default context;
