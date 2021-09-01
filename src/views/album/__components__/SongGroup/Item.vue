<template>
  <div
    class="flex items-center justify-between p-4 transition-all rounded-xl group"
    :class="active ? 'bg-red-50' : 'hover:bg-gray-100'"
  >
    <div class="flex-none w-9">
      <div class="font-sans font-bold text-gray-700 group-hover:hidden">
        {{ index }}
      </div>
      <ViaSvgIcon
        :name="active ? 'volume' : 'play'"
        class="hidden mt-px text-lg text-red-600 transition-transform cursor-pointer hover:scale-105 group-hover:block"
      />
    </div>

    <div class="flex-1 overflow-hidden text-lg font-bold truncate">
      {{ title }}
    </div>

    <div class="flex items-center flex-none">
      <!-- name="heart-solid" -->
      <ViaSvgIcon
        :name="like ? 'heart-solid' : 'heart'"
        class="hidden mt-px text-xl text-red-600 transition-transform cursor-pointer hover:scale-105 group-hover:block"
      />
      <div class="flex-none w-16 font-sans font-bold text-right text-gray-700">
        {{ duration }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongGroupItem',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    active: {
      type: Boolean,
    },
    title: {
      type: String,
      default: '',
    },
    like: {
      type: Boolean,
    },
    duration: {
      type: String,
      default: '0:00',
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
