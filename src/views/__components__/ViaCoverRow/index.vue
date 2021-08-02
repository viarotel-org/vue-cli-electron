<template>
  <div class="flex items-center">
    <div
      class="relative flex-none transition-all group active:scale-95"
      :style="imageSizeStyles"
    >
      <ViaImage
        :src="image"
        alt=""
        class="!absolute inset-0 cursor-pointer"
        :style="roundedStyles"
      />
      <div
        v-if="hoverShadow"
        class="
          scale-x-[92%] scale-y-[96%]
          opacity-0
          group-hover:shadow-image-base
          !top-3
          2xl:!top-6
        "
        :style="{
          backgroundImage: `url(${image})`,
          ...roundedStyles,
        }"
      ></div>
      <div
        v-if="hoverIcon"
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
          class="!w-2/5 !h-2/5"
        />
      </div>
    </div>
    <div
      class="flex-1 overflow-hidden"
      :style="{ ...gapXStyles }"
    >
      <div
        class="truncate min-h-[1.25em] cursor-pointer hover:underline font-bold"
        :style="{ ...titleSizeStyles }"
        :title="title"
      >
        {{ title }}
      </div>
      <div
        v-if="desc"
        class="
          truncate
          min-h-[1.25em]
          text-gray-700
          hover:underline
          cursor-pointer
        "
        :title="desc"
        :style="{ ...descSizeStyles, ...gapYStyles }"
      >
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<script>
import ViaImage from '@/components/ViaImage.vue';

export default {
  name: 'ViaCoverRow',
  components: { ViaImage },
  props: {
    type: {
      type: String,
      default: 'square', // square rounded rectangle
    },
    size: {
      type: String,
      default: 'mini', // medium / small / mini
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
    hoverShadow: {
      type: Boolean,
      default: true,
    },
    hoverIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    sizeModel() {
      const tailwind = this.$tailwind.theme;
      const spacing = tailwind.spacing;
      return {
        medium: {
          image: '',
          rounded: '',
          title: '',
          desc: '',
        },
        small: {
          image: spacing[14],
          rounded: tailwind.borderRadius.lg,
          title: tailwind.fontSize.xl,
          desc: tailwind.fontSize.base,
          gapX: spacing[6],
          gapY: spacing[1],
        },
        mini: {
          image: spacing[12],
          rounded: tailwind.borderRadius.DEFAULT,
          title: tailwind.fontSize.lg,
          desc: tailwind.fontSize.sm,
          gapX: spacing[3],
          gapY: spacing.px,
        },
      };
    },
    sizeData() {
      return this.sizeModel[this.size];
    },
    imageSizeStyles() {
      const value = {
        height: this.sizeData.image,
        aspectRatio: '1 / 1',
      };
      if (this.type === 'rectangle') {
        value.aspectRatio = '1 / 0.618';
      }
      return value;
    },
    roundedStyles() {
      const value = this.type === 'rounded' ? '50%' : this.sizeData.rounded;
      return { borderRadius: value };
    },
    titleSizeStyles() {
      return { fontSize: this.sizeData.title };
    },
    descSizeStyles() {
      return { fontSize: this.sizeData.desc };
    },
    gapXStyles() {
      return { marginLeft: this.sizeData.gapX };
    },
    gapYStyles() {
      return { marginTop: this.sizeData.gapY };
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
