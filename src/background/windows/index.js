import Main from '@/background/mainWindow';

export default class {
  constructor() {
    this.main = new Main();
  }

  /** 创建所有窗口 */
  init() {
    this.main.init();
  }
}
