<template>
  <div class="absolute inset-0 h-full">
    <Sidebar />
    <div
      v-full:width
      class="p-4"
    >
      <RouterView />
    </div>
  </div>
</template>

<script>
import Sidebar from './__components__/Sidebar/index.vue';

export default {
  name: 'Layout',
  components: { Sidebar },
  data() {
    return {};
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
