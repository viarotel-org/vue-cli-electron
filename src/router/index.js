import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: 'sub-window',
      name: 'sub-window',
      component: () => import('@/views/sub-window.vue'),
    },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
