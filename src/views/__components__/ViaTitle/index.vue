<template>
  <div class="flex items-end">
    <slot>
      <div
        class="title"
        :class="nameClass"
      >
        {{ name }}
      </div>
    </slot>
    <slot
      v-if="desc"
      name="desc"
    >
      <div
        class="desc"
        :class="descClass"
      >
        {{ desc }}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    descClass: {
      type: String,
      default: '',
    },
    nameClass: {
      type: [Object, String, Array],
      default: '',
    },
  },
  emits: ['desc'],
};
</script>

<style lang="postcss" scoped>
.title {
  @apply truncate max-w-100 text-3xl font-bold;
}
.desc {
  @apply ml-auto text-gray-700 text-sm cursor-pointer hover:underline font-bold active:scale-95 transition-all duration-300;
}
</style>
