<template>
  <div class="p-4">
    <div class="my-4">我是主窗口</div>
    <el-button
      type="primary"
      size="default"
      @click="openWindow('subWindow', '我是主窗口传过来的消息')"
    >
      打开子窗口
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  created() {
    this.$ipcRenderer.on('app-exit-before', () => {
      this.$ipcRenderer.send('app-exit');
    });
  },
  methods: {
    openWindow(name, params) {
      this.$ipcRenderer.send('open-window', name, params);
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
