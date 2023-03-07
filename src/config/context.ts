import { MicroServiceRepository } from "../data/microservices/MicroServiceRepository";
import { MicroserviceService } from "../domain/services/microService.service";
import DiContainer from "./DI/DiContainer";

const context = new DiContainer();

context.registerClass("MicroserviceRepository", MicroServiceRepository);
context.registerClass('MicroserviceService', MicroserviceService, ['MicroserviceRepository'])
console.info('CONTEXT LOADED')

export default context;
