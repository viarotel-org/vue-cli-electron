<template>
  <div class="flex items-center">
    <div
      class="flex items-center pl-3 text-sm cursor-pointer pt-px-2 title group"
      @click="$emit('click-title', title)"
    >
      <img
        src="@/assets/images/logo.png"
        alt=""
        class="w-6 h-6 transition-all duration-300 rounded-full group-hover:shadow-md group-hover:-rotate-6 group-hover:scale-105 group-active:scale-95"
      />
      <div class="pl-2 truncate max-w-100">
        {{ title }}
      </div>
    </div>
    <div
      class="flex items-center justify-center ml-auto text-gray-800 transition-all duration-300 w-14 h-9 hover:bg-gray-300 active:bg-gray-400 minimize"
      @click="$emit('minimize')"
    >
      <ViaSvgIcon
        name="chrome-minimize"
        class="text-lg"
      />
    </div>
    <div
      class="flex items-center justify-center text-gray-800 transition-all duration-300 w-14 h-9 hover:bg-gray-300 active:bg-gray-400 toggle-maximize"
      @click="$emit('toggle-maximize')"
    >
      <ViaSvgIcon
        :name="maximize ? 'chrome-restore' : 'chrome-maximize'"
        class="text-lg"
      />
    </div>
    <div
      class="flex items-center justify-center text-gray-800 transition-all duration-300 w-14 h-9 hover:bg-red-600 active:bg-red-700 hover:text-white close"
      @click="$emit('close')"
    >
      <ViaSvgIcon
        name="chrome-close"
        class="text-lg"
      />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    maximize: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  emits: ['click-title', 'minimize', 'toggle-maximize', 'close'],
};
</script>

<style lang="postcss" scoped>
</style>
