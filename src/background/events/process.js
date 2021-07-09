import {
  app,
} from 'electron';
import {
  isDevelopment,
} from '@/utils';

export default {
  init() {
    if (isDevelopment) {
      if (process.platform === 'win32') {
        process.on('message', (data) => {
          if (data === 'graceful-exit') {
            app.quit();
          }
        });
      } else {
        process.on('SIGTERM', () => {
          app.quit();
        });
      }
    }
  },
};
