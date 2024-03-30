import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SayHelloService {
  constructor(private loggerService: LoggerService) {}

  sayHello() {
    this.loggerService.logger("HELLO :D");
  }
}
