<template>
  <div
    class="relative flex p-6 overflow-hidden text-white rounded-2xl"
    @click="$router.push('/radar')"
  >
    <div
      class="bg-gray-700 bg-filter-base"
      :style="{
        backgroundImage: `url(${coverImage})`,
      }"
    ></div>
    <div class="h-full aspect-ratio-square button-rotate-bigger">
      <ViaImage
        class="absolute inset-0 flex-none w-full h-full rounded-xl"
        :src="coverImage"
      />
    </div>
    <div class="flex flex-col flex-1 ml-6">
      <div
        class="text-3xl font-bold truncate cursor-pointer w-80 xl:w-100 2xl:w-120 hover:underline"
      >
        追风
      </div>
      <div
        class="mt-2 text-lg text-white truncate text-opacity-60 w-80 xl:w-100 2xl:w-120"
      >
        <span class="cursor-pointer hover:underline">言任中</span>
        -
        <span class="cursor-pointer hover:underline">追风</span>
      </div>
      <div class="flex items-center mt-auto space-x-4 -translate-x-2">
        <div class="w-10 h-10 button-base hover:bg-opacity-10">
          <ViaSvgIcon
            name="previous"
            class="text-lg"
          />
        </div>
        <div class="w-12 h-12 button-base !rounded-2xl hover:bg-opacity-10">
          <!-- name="pause" -->
          <ViaSvgIcon
            name="play"
            class="mt-px text-3xl ml-px-3"
          />
        </div>
        <div class="w-10 h-10 button-base hover:bg-opacity-10">
          <ViaSvgIcon
            name="next"
            class="text-lg"
          />
        </div>
      </div>
    </div>
    <div class="absolute flex items-center text-lg cursor-pointer bottom-6 right-6 opacity-20 hover:opacity-40">
      <ViaSvgIcon
        name="fm"
        class="text-xl"
      />
      <span class="ml-2">私人FM</span>
    </div>
  </div>
</template>

<script>
import ViaImage from '@/components/ViaImage.vue';

export default {
  components: { ViaImage },
  computed: {
    coverImage() {
      return this.$tempImage();
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
