import {
  dialog,
  ipcRenderer as _ipcRenderer,
  ipcMain as _ipcMain,
  BrowserWindow,
  Menu,
} from 'electron';
import {
  windowOptions,
} from '@/config';
/**
 *
 * @param {*} content 提示内容
 * @param {*} actions 操作列表
 */
export async function showMessageBox(content, actions = [], {
  title = '提示',
  type = 'info',
  moreOptions = {},
} = {}) {
  const {
    response: index,
  } = await dialog.showMessageBox({
    type,
    title,
    cancelId: -1,
    message: content,
    buttons: actions.map((item) => item.label),
    ...moreOptions,
  });
  const click = actions[index].click;
  if (index !== -1 && click) click(index);
}

/**
 * @description 从渲染器进程到主进程的异步通信封装。
 * @returns {object}
 */
export function ipcRenderer() {
  return {
    ..._ipcRenderer,
    on: _ipcRenderer.on,
    once: _ipcRenderer.once,
    send: _ipcRenderer.invoke,
    remove: _ipcRenderer.removeListener,
    removeAll: _ipcRenderer.removeAllListeners,
  };
}

/**
 * @description 从主进程到渲染进程的异步通信封装。
 * @returns {object}
 */
export function ipcMain() {
  return {
    ..._ipcMain,
    on: _ipcMain.handle,
    once: _ipcMain.handleOnce,
    send: (ctx, name, data) => ctx.webContents.send(name, data),
    remove: _ipcMain.removeHandler,
  };
}

/**
 * @description 开发者工具
 * @param  win BrowserWindow实例
 * @returns {object}
 */
export function devTools(win) {
  const webContents = win.webContents;
  return {
    open: (params = {}) => webContents.openDevTools({
      mode: 'detach',
      ...params,
    }),
    close: () => webContents.closeDevTools(),
    isOpen: () => webContents.isDevToolsOpened(),
  };
}
/**
 * @description 创建浏览器窗口
 * @param name 渲染页面的名称
 * @param data 传递给渲染页面的参数
 * @param options BrowserWindow所需要的参数
 */
export class CreateBrowserWindow {
  constructor(name, data, {
    options = {},
    menuData = [],
    isCreateProtocol = false,
  } = {}) {
    this.win = null;
    this.name = name;
    this.data = data;
    this.options = options;
    this.menuData = menuData;
    this.isCreateProtocol = isCreateProtocol;
  }

  init(data = this.data, options = this.options) {
    this.win = new BrowserWindow({
      ...windowOptions(),
      ...options,
    });
    this.win.on('closed', () => {
      this.win = null;
    });
    if (data) this.sendData(data);
    this.loadURL();
    this.setMenu();

    return this.win;
  }

  loadURL() {
    const WEBPACK_DEV_SERVER_URL = process.env.WEBPACK_DEV_SERVER_URL;
    if (WEBPACK_DEV_SERVER_URL) {
      // Load the url of the dev server if in development mode
      this.win.loadURL(WEBPACK_DEV_SERVER_URL + this.name).then(() => {
        if (!process.env.IS_TEST) {
          const _devTools = devTools(this.win);
          _devTools.open({
            mode: 'detach',
          });
        }
      });
    } else {
      const {
        createProtocol,
      } = require('vue-cli-plugin-electron-builder/lib');
      if (this.isCreateProtocol) createProtocol('app');
      // Load the index.html when not in development
      this.win.loadURL(`app://./${this.name}.html`);
    }
  }

  setMenu() {
    const menuData = this.menuData;
    const menu = Menu.buildFromTemplate(menuData);
    this.win.setMenu(menu);
  }

  sendData(data) {
    this.win.webContents.once('dom-ready', () => {
      this.win.show();
      this.win.webContents.send('on-ready', data);
    });
  }
}
