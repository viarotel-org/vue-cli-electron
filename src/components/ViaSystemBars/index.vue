<template>
  <component
    :is="componentName"
    class="via-system-bars"
    title="网易云音乐"
    :maximize="isMaximize"
    @toggle-maximize="toggleMaximize"
    @close="onClose"
    @minimize="onMinimize"
  />
</template>

<script>
import Windows from './Windows.vue';
import Mac from './Mac.vue';

export default {
  name: 'ViaSystemBars',
  components: {
    Windows,
    Mac,
  },
  data() {
    return {
      isMaximize: false,
    };
  },
  computed: {
    componentName() {
      let value = 'Windows';
      if (process.platform === 'darwin') {
        value = 'Mac';
      }
      return value;
    },
  },
  created() {
    this.$ipcRenderer.on('toggle-maximize', (e, value) => {
      this.isMaximize = value;
    });
  },
  methods: {
    async toggleMaximize() {
      this.isMaximize = await this.$ipcRenderer.send('toggle-maximize');
    },
    onMinimize() {
      this.$ipcRenderer.send('minimize');
    },
    onClose() {
      this.$ipcRenderer.send('close-app');
    },
  },
};
</script>

<style lang="postcss" scoped>
.via-system-bars {
  -webkit-app-region: drag;
  ::v-deep {
    .title,
    .minimize,
    .toggle-maximize,
    .close {
      -webkit-app-region: no-drag;
    }
  }
}
</style>
