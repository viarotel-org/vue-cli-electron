import WindowsManager from './windows';
import events from './events';

export default class {
  constructor() {
    events.init(this);
    this.windows = new WindowsManager(this);
  }

  init() {
    this.windows.init();
  }
}
