import {
  app,
} from 'electron';
import {
  ipcMain,
  toggleDevTools,
  CreateBrowserWindow,
  showMessageBox,
} from '@/utils/electron';
import tray from '@/background/tray';

const _ipcMain = ipcMain();

export default {
  init(appManager) {
    const getWindow = (name) => appManager.windows[name].win;
    const mainWindow = getWindow('main');

    // 切换最大化
    _ipcMain.on('toggle-maximize', () => {
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
        return false;
      }

      mainWindow.maximize();
      return true;
    });

    // 最小化窗口
    _ipcMain.on('minimize', () => {
      mainWindow.minimize();
    });

    // 关闭应用
    _ipcMain.on('close-app', () => {
      showMessageBox('确定要关闭吗', [{
        label: '最小化到托盘',
        click() {
          mainWindow.hide(); // 调用 最小化实例方法
          tray.init(mainWindow);
        },
      },
      {
        label: '直接退出',
        click() {
          // _ipcMain.send(mainWindow, 'app-exit-before');
          app.exit();
        },
      },
      ]);
    });

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
