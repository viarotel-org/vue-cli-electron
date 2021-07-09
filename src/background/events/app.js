import {
  app,
  BrowserWindow,
} from 'electron';

// import vueDevtools from '@/background/plugins/vueDevtools';

export default {
  init(appManager, {
    windowsReady = () => {},
  } = {}) {
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        appManager.init();
        windowsReady();
      }
    });

    /** 在Electron加载前需要进行初始化 */
    app.on('ready', async () => {
      // await vueDevtools.init();
      appManager.init();
      windowsReady();
    });

    /** app退出之前执行 */
    app.on('before-quit', () => {});

    /** 所有窗口都被关闭 */
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
  },
};
