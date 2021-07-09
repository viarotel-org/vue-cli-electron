import {
  showMessageBox,
  ipcMain,
} from '@/utils/electron';
import tray from '@/background/tray';

const _ipcMain = ipcMain();

export default {
  init(appManager) {
    const mainWindow = appManager.windows.main.win;

    mainWindow.on('close', (e) => {
      e.preventDefault();
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
          _ipcMain.send(mainWindow, 'app-exit-before');
        },
      },
      ]);
    });
  },
};
