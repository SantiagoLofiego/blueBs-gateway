interface MicroServiceRepository{
    add(instance:ServiceInstance):ServiceInstance;
    find(serviceName:string):ServiceInstance;
    update(instance:ServiceInstance):ServiceInstance;
    removeMicroService(instance:ServiceInstance):ServiceInstance;
}

export default MicroServiceRepository;