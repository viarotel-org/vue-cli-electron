import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/found',
    name: 'found',
    component: () => import('@/views/found/index.vue'),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue'),
    meta: {
      keepAlive: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
