<template>
  <div
    class="absolute right-0 transform translate-x-full -translate-y-1/2 border-t border-b border-r border-gray-300 shadow-sm cursor-pointer  rounded-r-md top-1/2"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <i
      :title="modelValue ? '展开' : '折叠'"
      :class="[
        'el-icon-arrow-left transform transition-transform duration-700',
        modelValue ? 'rotate-180' : 'rotate-0',
      ]"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style>
</style>
