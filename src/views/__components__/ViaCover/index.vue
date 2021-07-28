<template>
  <div class="">
    <div
      class="relative transition-all group active:scale-95"
      :class="[height]"
    >
      <ViaImage
        :src="coverData.image"
        alt=""
        class="!absolute inset-0 cursor-pointer"
        :class="[rounded]"
      />
      <div
        class="
          scale-x-[92%] scale-y-[96%]
          opacity-0
          group-hover:shadow-image-base
          !top-3
          2xl:!top-6
        "
        :class="[rounded]"
        :style="{
          backgroundImage: `url(${coverData.image})`,
        }"
      ></div>
      <div
        class="
          absolute
          flex
          items-center
          justify-center
          w-1/4
          aspect-ratio-square
          text-white
          transition-all
          duration-300
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          top-1/2
          left-1/2
          backdrop-filter backdrop-saturate-200 backdrop-blur-lg
          hover:!bg-opacity-30
          cursor-pointer
          bg-white bg-opacity-10
          transform-gpu
          scale-0
          group-hover:scale-100
        "
      >
        <ViaSvgIcon
          name="play"
          class="!w-2/5 !h-2/5 mt-px ml-px-3"
        />
      </div>
    </div>
    <div
      class="
        line-clamp-2
        min-h-[1.75rem]
        cursor-pointer
        hover:underline
        text-lg
        font-bold
        mt-4
      "
      :title="coverData.title"
    >
      {{ coverData.title }}
    </div>
    <div
      class="line-clamp-2 min-h-[1.25rem] text-sm text-gray-800"
      :title="coverData.desc"
    >
      {{ coverData.desc }}
    </div>
  </div>
</template>

<script>
import ViaImage from '@/components/ViaImage.vue';

export default {
  components: { ViaImage },
  props: {
    type: {
      type: String,
      default: 'square', // square rounded rectangle
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    height() {
      return this.type === 'rectangle' ? 'pb-[61.8%]' : 'pb-[100%]';
    },
    rounded() {
      return this.type === 'rounded' ? 'rounded-full' : 'rounded-2xl';
    },
    coverData() {
      return this.data;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
