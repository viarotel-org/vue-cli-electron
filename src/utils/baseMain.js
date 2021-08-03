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
  vObserver,
} from '@/directive';

import '@/styles/css/index.css';

import {
  tempImage,
} from '@/utils/index';

import VueScreen from 'vue-screen';

import getFullTailwindConfig from '@/plugins/getFullTailwindConfig';

import contentmenu from 'v-contextmenu';
import 'v-contextmenu/dist/themes/default.css';

export default function (App) {
  const app = createApp(App);

  app.config.globalProperties.$ipcRenderer = ipcRenderer();
  app.config.globalProperties.$tempImage = tempImage;
  app.config.globalProperties.$tailwind = getFullTailwindConfig();

  app.use(icons);

  app.use(store);

  app.use(vFull);
  app.use(vObserver);

  app.use(VueScreen, 'tailwind');

  app.use(contentmenu);

  return app;
}
