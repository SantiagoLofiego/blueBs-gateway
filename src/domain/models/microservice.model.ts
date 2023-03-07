import { ServiceInstance } from "./serviceInstance.model";

export class Microservice {
  serviceName: string;
  instances: ServiceInstance[];

  constructor(serviceName: string, instances?: ServiceInstance[]) {
    this.serviceName = serviceName;
    this.instances = instances || [];
  }

  addInstance(instance: ServiceInstance): void {
    if (!this.contains(instance)) {
      this.instances.push(instance);
    } else {
      throw new Error(`This instance of \"${this.serviceName}\" already exist`);
    }
  }

  updateInstance(id: string, data: Object): ServiceInstance {
    const index = this.instances.findIndex(el => el.id === id);
    if (index >= 0) {
      const updated = Object.assign(this.instances[index], data);
      updated.status = ServiceInstance.statusFromString(updated.status);
      return updated;
    } else {
      throw new Error(`The instance with id \"${id}\" does not exist`)
    }
  }

  removeInstance(id: string): void {
    const index = this.instances.findIndex(el => el.id === id);
    if (index >= 0) {
      this.instances.splice(index, 1);
    } else {
      throw new Error(`The instance with id \"${id}\" does not exist`)
    }
  }

  contains(instance: ServiceInstance): boolean {
    const index = this.instances.findIndex(el => el.equals(instance));
    if (index >= 0) {
      return true;
    } else {
      return false;
    }
  }
}