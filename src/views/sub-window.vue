<template>
  <div class="">
    <div class="">我是主窗口</div>
    <el-button
      type="primary"
      class=""
      @click="openWindow('subWindow', '我是主窗口传过来的消息')"
    >
      打开子窗口
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    openWindow(name, params) {
      this.$ipcRenderer.send('open-window', name, params);
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
