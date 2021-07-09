<template>
  <div class="p-4">
    <div class="">我是子窗口</div>
    <div class="my-4">{{ mainData }}</div>
    <el-button
      type="primary"
      @click="closeWindow"
    >
      关闭子窗口
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainData: null,
    };
  },
  created() {
    this.$ipcRenderer.on('on-ready', (e, data) => {
      this.mainData = data;
    });
  },
  methods: {
    closeWindow() {
      this.$ipcRenderer.send('close-window', 'subWindow');
    },
  },
};
</script>

<style>
</style>
