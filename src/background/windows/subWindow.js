import {
  CreateBrowserWindow,
} from '@/utils/electron';

export default class extends CreateBrowserWindow {
  constructor() {
    super('subWindow', '我是传过来的默认消息', {
      menuData: [{
        label: '我是子窗口的菜单',
      }],
    });
  }
}
