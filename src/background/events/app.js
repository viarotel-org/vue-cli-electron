import {
  app,
  BrowserWindow,
  globalShortcut,
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
    app.on('before-quit', () => {
      console.log('before-quit');
    });

    /** 所有窗口都被关闭 */
    app.on('window-all-closed', () => {
      console.log('window-all-closed');
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
    /** 当所有窗口被关闭后触发，同时应用程序将退出。 */
    app.on('will-quit', () => {
      console.log('will-quit');
      // 注销所有快捷键
      globalShortcut.unregisterAll();
    });
  },
};
