<template>
  <div
    class="flex items-center px-3 py-1 transition-all duration-300 rounded-lg  bg-opacity-80 min-w-60"
    :class="inputFocus ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-500'"
  >
    <ViaSvgIcon
      name="search"
      class="text-lg transform"
    />
    <input
      class="ml-2 text-lg font-bold placeholder-gray-700 bg-transparent w-44"
      :value="modelValue"
      :type="type"
      :placeholder="inputFocus ? '' : placeholder"
      @focus="inputFocus = true"
      @input="(e) => $emit('update:modelValue', e.target.value)"
      @blur="inputFocus = false"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      inputFocus: false,
    };
  },
};
</script>

<style>
</style>
