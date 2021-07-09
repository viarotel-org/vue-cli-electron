import installExtension, {
  VUEJS3_DEVTOOLS,
} from 'electron-devtools-installer';
import {
  isDevelopment,
} from '@/utils';

// Install Vue Devtools
export default {
  async init() {
    if (isDevelopment && !process.env.IS_TEST) {
      try {
        await installExtension(VUEJS3_DEVTOOLS);
      } catch (e) {
        console.error('Vue Devtools failed to install:', e.toString());
      }
    }
  },
};
