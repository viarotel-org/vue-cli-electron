import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';

import baseMain from '@/utils/baseMain';
import router from './router';
import App from './App.vue';

const app = baseMain(App);

hljs.registerLanguage('json', json);
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
app.use(VMdEditor);

app.use(router);

app.mount('#app');
