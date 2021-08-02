<template>
  <div
    class="via-drag-bars"
    :style="styles"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '32px',
    },
    offset: {
      type: String,
    },
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height,
        ...(this.offset ? { marginLeft: this.offset } : {}),
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.via-drag-bars {
  -webkit-app-region: drag;
  @apply fixed top-0 left-0 z-[1000];
}
</style>
