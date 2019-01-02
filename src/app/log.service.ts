import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  writeLog(msg) {
    console.log(msg);
  }

}
