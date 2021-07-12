import {
  createApp,
} from 'vue';

import {
  ipcRenderer,
} from '@/utils/electron';

import store from '@/store';

import elementPlus from '@/plugins/element-plus';

import {
  vFull,
} from '@/directive';

import '@/styles/css/index.css';

export default function (App) {
  const app = createApp(App);
  app.config.globalProperties.$ipcRenderer = ipcRenderer();
  app.use(store);
  app.use(vFull);
  app.use(elementPlus);

  return app;
}
