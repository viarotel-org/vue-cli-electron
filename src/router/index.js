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
  {
    path: '/album',
    name: 'album',
    component: () => import('@/views/album/index.vue'),
    meta: {},
  },
  {
    path: '/songlist',
    name: 'songlist',
    component: () => import('@/views/songlist/index.vue'),
    meta: {},
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('@/views/singer/index.vue'),
    meta: {},
  },
  {
    path: '/radar',
    name: 'radar',
    component: () => import('@/views/radar/index.vue'),
    meta: {},
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/recommend/index.vue'),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
