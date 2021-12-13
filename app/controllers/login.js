import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginController extends Controller {

  @tracked
  isReady = false

  @action
  setIsReady() {
    later(() => {
      this.isReady = true;
    }, 60000)
  }
}
