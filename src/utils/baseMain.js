import {
  createApp,
} from 'vue';

import {
  ipcRenderer,
} from '@/utils/electron';

import icons from '@/icons';

import store from '@/store';

import {
  vFull,
} from '@/directive';

import '@/styles/css/index.css';

import {
  tempImage,
} from '@/utils/index';

import VueScreen from 'vue-screen';

export default function (App) {
  const app = createApp(App);

  app.config.globalProperties.$ipcRenderer = ipcRenderer();
  app.config.globalProperties.$tempImage = tempImage;

  app.use(icons);

  app.use(store);

  app.use(vFull);

  app.use(VueScreen, 'tailwind');

  return app;
}
