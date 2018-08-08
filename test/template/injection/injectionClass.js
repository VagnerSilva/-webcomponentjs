import { Injectable } from '../../../src';

@Injectable({
  providers: [],
})
export class Injection {
  start() {
    return 'Eureka!';
  }

  changeText(text) {
    return text;
  }
}
