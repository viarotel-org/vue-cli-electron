<template>
  <div
    class="via-image"
    :class="{ placeholder }"
    :style="{
      ...(width ? { width } : {}),
      ...(height ? { height } : {}),
    }"
    v-bind="$attrs"
  >
    <img
      :src="src"
      alt=""
      class="via-image-item"
      :class="customClass"
      :style="{
        objectFit: mode,
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'ViaImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'cover',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    placeholder: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: [String, Array, Object],
      default: '',
    },
  },
};
</script>

<style lang="postcss" scoped>
.via-image {
  @apply bg-no-repeat relative overflow-hidden;

  &.placeholder {
    background: #e0e0e0 url("~@/assets/images/temp-image.png") center / 60%
      no-repeat;
  }

  .via-image-item {
    @apply w-full h-full block;
  }
}
</style>
