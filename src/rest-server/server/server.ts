import express, { Router } from "express";
import { ServiceInstance } from "../../domain/models/serivce-instance.model";
import router from "../routes";

export class Server {
  public router: Router;
  public port: String;

  private constructor(port: String, router: Router) {
    this.router = router;
    this.port = port;
  }
  getInstance(): Server {}

  run(): void {
    router.use();
  }
}
