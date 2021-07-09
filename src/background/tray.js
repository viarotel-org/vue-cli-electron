import {
  Tray,
  Menu,
} from 'electron';
import {
  appName,
  logoPath,
} from '@/config/index';
import {
  ipcMain,
} from '@/utils/electron';

const _ipcMain = ipcMain();

export default {
  async init(mainWindow) {
    this.tray = new Tray(logoPath());

    this.tray.on('click', () => {
      mainWindow.show();
      this.tray.destroy();
    });

    this.tray.setToolTip(appName);

    const contextMenu = Menu.buildFromTemplate([{
      label: '显示主界面',
      type: 'normal',
      click() {
        mainWindow.show();
        this.tray.destroy();
      },
    },
    {
      label: '退出',
      type: 'normal',
      click() {
        _ipcMain.send(mainWindow, 'app-exit-before');
      },
    },
    ]);
    this.tray.setContextMenu(contextMenu);
  },
};
