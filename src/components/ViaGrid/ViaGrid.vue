<template>
  <div
    class="via-grid"
    :style="{
      ...(rounded ? { borderRadius: rounded } : {}),
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViaGrid',
  provide() {
    return {
      parentProps: this.$props,
    };
  },
  props: {
    // 是否固定为正方形
    square: {
      type: Boolean,
    },
    // 元素间的间距
    gap: {
      type: String,
      default: '0px',
    },
    // 元素间x的间距
    gapX: {
      type: String,
      default: '',
    },
    // 元素间y的间距
    gapY: {
      type: String,
      default: '',
    },
    // 列数
    cols: {
      type: [String, Number],
      default: 3,
    },
    rounded: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="postcss" scoped>
  .via-grid {
    @apply flex flex-wrap;
  }
</style>
