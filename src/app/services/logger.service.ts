// Classe elle fournit le service de Log

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(message: any) {
    console.log('Log From LoggerService');
    console.log(message);
  }
}
