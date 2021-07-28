import {
  CreateBrowserWindow,
} from '@/utils/electron';

export default class extends CreateBrowserWindow {
  constructor() {
    super('index', '', {
      options: {
        frame: false,
        width: 1440,
        height: 840,
        minWidth: 1080,
        minHeight: 720,
      },
      isCreateProtocol: true,
    });
  }
}
