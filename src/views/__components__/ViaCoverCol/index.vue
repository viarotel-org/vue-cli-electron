<template>
  <div class="">
    <div
      class="relative transition-all group active:scale-95"
      :style="{
        width: sizeData.image,
      }"
      :class="[height]"
    >
      <ViaImage
        :src="image"
        alt=""
        class="!absolute inset-0 cursor-pointer"
        :style="{ ...rounded }"
      />
      <div
        class="
          scale-x-[92%] scale-y-[96%]
          opacity-0
          group-hover:shadow-image-base
          !top-3
          2xl:!top-6
        "
        :style="{
          backgroundImage: `url(${image})`,
          ...rounded,
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
      class="line-clamp-2 min-h-[1em] cursor-pointer hover:underline font-bold"
      :style="{
        fontSize: sizeData.title,
        marginTop: sizeData.gap,
      }"
      :title="title"
    >
      {{ title }}
    </div>
    <div
      :style="{
        fontSize: sizeData.desc,
      }"
      class="line-clamp-2 min-h-[1em] text-gray-800"
      :title="desc"
    >
      {{ desc }}
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
    size: {
      type: String,
      default: 'auto', // medium | small | mini | auto
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
  computed: {
    sizeModel() {
      const tailwind = this.$tailwind.theme;
      const spacing = tailwind.spacing;
      return {
        auto: {
          image: spacing.full,
          rounded: tailwind.borderRadius['2xl'],
          title: tailwind.fontSize.lg,
          desc: tailwind.fontSize.sm,
          gap: spacing[4],
        },
      };
    },
    sizeData() {
      return this.sizeModel[this.size];
    },
    height() {
      return this.type === 'rectangle' ? 'pb-[61.8%]' : 'pb-[100%]';
    },
    rounded() {
      const value = this.type === 'rounded' ? '50%' : this.sizeData.rounded;
      return { borderRadius: value };
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
