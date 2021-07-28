<template>
  <div
    class="via-drag-bars"
    :style="{ width, height }"
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
  },
};
</script>

<style lang="postcss" scoped>
.via-drag-bars {
  -webkit-app-region: drag;
  @apply fixed top-0 left-0 z-50;
}
</style>
