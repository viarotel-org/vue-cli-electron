import app from './app';
import windows from './windows';
import ipc from './ipc';
import shortcutkey from './shortcutkey';
import process from './process';

export default {
  init(appManager) {
    app.init(appManager, {
      windowsReady() {
        windows.init(appManager);
        ipc.init(appManager);
        shortcutkey.init(appManager);
      },
    });
    process.init(appManager);
  },
};
