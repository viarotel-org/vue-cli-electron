import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/album',
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
  {
    path: '/album',
    name: 'album',
    component: () => import('@/views/album/index.vue'),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
