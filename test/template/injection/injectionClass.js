import { Injectable } from '../../../lib';

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
