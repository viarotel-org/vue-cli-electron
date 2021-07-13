import {
  app,
} from 'electron';
import {
  ipcMain,
  toggleDevTools,
  CreateBrowserWindow,
} from '@/utils/electron';

const _ipcMain = ipcMain();

export default {
  init(appManager) {
    const getWindow = (name) => appManager.windows[name].win;
    const mainWindow = getWindow('main');

    // 打开window
    _ipcMain.on('open-window', (e, name = '', data = null, options = {}) => {
      let subWindow = appManager.windows[name];
      if (!subWindow) {
        subWindow = new CreateBrowserWindow(name);
      }
      subWindow.init(data, options);
    });

    // 关闭window
    _ipcMain.on('close-window', async (e, name) => {
      getWindow(name).close();
    });

    // 退出app
    _ipcMain.on('app-exit', async () => {
      app.exit();
    });

    // 操作开发者工具
    _ipcMain.on('toggleDevTools', (e, {
      win = mainWindow,
      params = {},
    } = {}) => {
      toggleDevTools(win, params);
    });
  },
};
