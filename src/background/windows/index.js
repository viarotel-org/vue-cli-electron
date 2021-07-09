import Main from '@/background/mainWindow';
import SubWindow from './subWindow';

export default class {
  constructor() {
    this.main = new Main();
    this.subWindow = new SubWindow();
  }

  /** 创建所有窗口 */
  init() {
    this.main.init();
  }
}
