import {
  globalShortcut,
  webContents,
} from 'electron';
import {
  toggleDevTools,
} from '@/utils/electron';

export default {
  init(appManager) {
    const getWindow = (name) => appManager.windows[name].win;
    // eslint-disable-next-line no-unused-vars
    const mainWindow = getWindow('main');

    // CommandOrControl+F12
    globalShortcut.register('CommandOrControl+F12', () => {
      const currentWebContents = webContents.getFocusedWebContents();
      toggleDevTools(currentWebContents);
    }) || console.log('CommandOrControl+F12 注册失败!');
  },
};
