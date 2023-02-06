import MicroServiceRepositoryInterface from "./interfaces/MicroServiceRepositoryInterface";

class MicroServiceRepository implements MicroServiceRepositoryInterface{
    add(instance: ServiceInstance): ServiceInstance {
        throw new Error("Method not implemented.");
    }
    find(serviceName: string): ServiceInstance {
        throw new Error("Method not implemented.");
    }
    update(instance: ServiceInstance): ServiceInstance {
        throw new Error("Method not implemented.");
    }
    removeMicroService(instance: ServiceInstance): ServiceInstance {
        throw new Error("Method not implemented.");
    }

}