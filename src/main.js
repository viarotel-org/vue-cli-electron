import baseMain from '@/utils/baseMain';

import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import router from './router';
import App from './App.vue';

const app = baseMain(App);

app.use(router);

app.component('VueSlider', VueSlider);

app.mount('#app');
