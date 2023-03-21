import { Microservice } from "../../models/microservice.model";

interface MicroServiceRepositoryInterface {
  findByName(serviceName: string): Promise<Microservice | null>;
  getAll(): Promise<Microservice[]>;
  save(microService: Microservice): Promise<void>;
  remove(serviceName: string): Promise<void>;
}

export default MicroServiceRepositoryInterface;