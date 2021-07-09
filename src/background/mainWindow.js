import {
  CreateBrowserWindow,
} from '@/utils/electron';

export default class extends CreateBrowserWindow {
  constructor() {
    super('index', '', {
      isCreateProtocol: true,
    });
  }
}
