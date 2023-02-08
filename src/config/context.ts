import server from "../rest-server";
import DiContainer from "./DI/DiContainer";

const container = new DiContainer();

container.registerInstance("server", server);

export default container;
