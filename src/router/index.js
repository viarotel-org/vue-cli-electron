import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '主页',
          icon: 'el-icon-house',
        },
        component: () => import('@/views/home.vue'),
      },
      {
        path: '/sub-window-create',
        name: 'sub-window-create',
        meta: {
          title: '创建子窗口',
          icon: 'el-icon-folder-add',
        },
        component: () => import('@/views/sub-window-create.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
