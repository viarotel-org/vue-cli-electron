<template>
  <div class="absolute inset-0 flex h-full">
    <div class="">
      <el-menu
        default-active="home"
        class="h-full overflow-y-auto w-50 scrollbar-beautiful"
        router
      >
        <el-menu-item
          v-for="(item, index) of tabsData"
          :key="index"
          :index="item.value"
        >
          <template #title>{{ item.label }}</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div
      v-full:width
      class="p-4"
    >
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabsData: [
        {
          label: '主页',
          value: 'home',
        },
        {
          label: '创建子窗口',
          value: 'sub-window',
        },
      ],
    };
  },
  created() {
    this.$ipcRenderer.on('app-exit-before', () => {
      this.$ipcRenderer.send('app-exit');
    });
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
</style>
