<template>
  <div
    class="fixed inset-0 z-20 h-full text-white transition-transform duration-500 bg-gray-700 transform-gpu"
    :class="modelValue ? 'translate-y-0' : 'translate-y-[110%]'"
  >
    <div
      class="bg-filter-base"
      :style="{
        backgroundImage: `url(${coverImage})`,
      }"
    ></div>
    <div
      class="absolute z-10 w-12 h-12 top-7 right-7 button-base hover:bg-opacity-10 opacity-60 hover:opacity-100"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <ViaSvgIcon
        name="arrow-down"
        class="text-2xl"
      />
    </div>
    <div class="flex items-center h-full mx-[12vw] xl:mx-[16vw] 2xl:mx-[20vw]">
      <div class="flex-none">
        <div
          class="relative transition-all duration-300 cursor-pointer w-100 h-100 xl:w-120 xl:h-120 2xl:w-140 2xl:h-140 active:scale-100 hover:scale-105 hover:-rotate-1 group"
        >
          <ViaImage
            :src="coverImage"
            class="w-full h-full rounded-xl"
          />
          <div
            class="scale-x-[92%] scale-y-[96%] shadow-image-base !top-3"
            :style="{
              backgroundImage: `url(${coverImage})`,
            }"
          ></div>
        </div>
        <div class="flex items-center justify-between mt-10">
          <div class="flex-1">
            <div
              class="text-2xl font-bold truncate cursor-pointer w-80 xl:w-100 2xl:w-120 hover:underline"
            >
              追风
            </div>
            <div
              class="mt-1 text-lg text-white truncate text-opacity-60 w-80 xl:w-100 2xl:w-120"
            >
              <span class="cursor-pointer hover:underline">言任中</span>
              -
              <span class="cursor-pointer hover:underline">追风</span>
            </div>
          </div>
          <div
            class="flex-none w-10 h-10 button-base hover:bg-opacity-10"
          >
            <!-- name="heart-solid" -->
            <ViaSvgIcon
              name="heart"
              class="mt-px text-xl"
            />
          </div>
        </div>
        <div class="flex items-center mt-6">
          <div class="flex-none">3:00</div>
          <vue-slider
            v-model="playSliderValue"
            height="4px"
            dot-size="12"
            drag-on-click
            :lazy="true"
            :silent="true"
            tooltip="none"
            class="!py-0 mx-3 theme-white flex-1"
          ></vue-slider>
          <div class="flex-none">3:00</div>
        </div>

        <div class="flex items-center justify-center mt-6 space-x-4">
          <div class="w-12 h-12 button-base hover:bg-opacity-10">
            <ViaSvgIcon
              name="previous"
              class="text-2xl"
            />
          </div>
          <div
            class="w-14 h-14 button-base !rounded-2xl hover:bg-opacity-10"
          >
            <!-- name="pause" -->
            <ViaSvgIcon
              name="play"
              class="mt-px text-4xl ml-px-3"
            />
          </div>
          <div class="w-12 h-12 button-base hover:bg-opacity-10">
            <ViaSvgIcon
              name="next"
              class="text-2xl"
            />
          </div>
        </div>
      </div>
      <div
        ref="lyrics"
        class="
          flex-1
          h-full
          overflow-y-auto
          scrollbar-none
          pl-[6vw]
          scroll-behavior-smooth
          before-space
        "
      >
        <div
          v-for="(item, index) of 100"
          :ref="(value) => lyricsItem.push(value)"
          :key="index"
          class="
            py-6
            pl-6
            text-3xl
            xl:text-4xl
            font-bold
            button-base
            hover:bg-opacity-10
            !justify-start
            leading-snug
            xl:leading-normal
            tracking-wider
            text-white
          "
          :class="
            lyricsActive === index ? 'text-opacity-90' : 'text-opacity-30'
          "
          @click="onLyricsItem({ index })"
        >
          {{ item }}
          为什么我用尽全身力气为什么我用尽全身力气
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViaImage from '@/components/ViaImage.vue';

export default {
  name: 'ViaPlayInfo',
  components: { ViaImage },
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      playSliderValue: 50,
      lyricsActive: 0,
      lyricsItem: [],
    };
  },
  computed: {
    coverImage() {
      return this.$tempImage();
    },
  },
  mounted() {},
  methods: {
    onLyricsItem({ index }) {
      this.lyricsActive = index;
      const parentRefs = this.$refs.lyrics;
      const parentHeight = parentRefs.offsetHeight;
      const currentChildRefs = this.lyricsItem[index];
      const currentChildOffsetTop = currentChildRefs.offsetTop;
      const scrollTop = currentChildOffsetTop - parentHeight / 2.5;
      parentRefs.scrollTop = Math.abs(scrollTop);
    },
  },
};
</script>

<style lang="postcss" scoped>
.before-space::before {
  content: "";
  display: block;
  @apply block w-full h-[50vh];
}
::v-deep .vue-slider-rail {
  @apply bg-gray-100 bg-opacity-10;
}

.bg-filter-base {
  @apply absolute inset-0 -z-1 bg-no-repeat bg-cover scale-110 filter blur-xl brightness-[30%];
}
</style>
