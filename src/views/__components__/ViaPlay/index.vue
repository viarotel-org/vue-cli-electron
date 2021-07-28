<template>
  <div
    class="bg-white  bg-opacity-80 backdrop-filter backdrop-saturate-150 backdrop-blur-lg"
    @click="$emit('update:isPlayInfo', !isPlayInfo)"
  >
    <vue-slider
      v-model="playSliderValue"
      height="2px"
      dot-size="12"
      drag-on-click
      :lazy="true"
      :silent="true"
      class="!pt-0 theme-red"
    ></vue-slider>
    <div class="flex items-center pb-2 px-resize">
      <div class="flex items-center justify-start w-1 flex-grow-2">
        <div class="flex items-center">
          <img
            :src="$tempImage(50)"
            alt=""
            class="rounded-md w-14 h-14 button-rotate-bigger"
          />
          <div class="ml-3">
            <div class="text-lg font-bold cursor-pointer hover:underline">
              明天你好
            </div>
            <div
              class="mt-1 text-sm text-gray-500 cursor-pointer hover:underline"
            >
              牛奶咖啡
            </div>
          </div>
        </div>
        <div class="w-10 h-10 ml-5 button-base">
          <!-- name="heart-solid" -->
          <ViaSvgIcon
            name="heart"
            class="mt-px text-lg"
          />
        </div>
      </div>
      <div class="flex items-center justify-center flex-grow w-1 space-x-4">
        <div class="w-10 h-10 button-base">
          <ViaSvgIcon
            name="previous"
            class="text-lg"
          />
        </div>
        <div class="w-12 h-12 button-base !rounded-2xl">
          <!-- name="pause" -->
          <ViaSvgIcon
            name="play"
            class="mt-px text-3xl ml-px-3"
          />
        </div>
        <div class="w-10 h-10 button-base">
          <ViaSvgIcon
            name="next"
            class="text-lg"
          />
        </div>
      </div>
      <div class="flex items-center justify-end w-1 space-x-2 flex-grow-2">
        <div class="w-10 h-10 button-base">
          <ViaSvgIcon
            name="text"
            class="text-lg"
          />
        </div>
        <div class="w-10 h-10 button-base">
          <ViaSvgIcon
            name="list"
            class="text-lg"
          />
        </div>
        <div class="w-10 h-10 button-base">
          <!-- name="repeat" -->
          <ViaSvgIcon
            name="repeat-1"
            class="text-lg"
          />
        </div>
        <div class="w-10 h-10 button-base">
          <ViaSvgIcon
            name="shuffle"
            class="text-lg"
          />
        </div>
        <div class="flex items-center">
          <div class="w-10 h-10 button-base">
            <!-- name="volume-mute" -->
            <!-- name="volume-half" -->
            <ViaSvgIcon
              name="volume"
              class="text-lg"
            />
          </div>
          <vue-slider
            v-model="volumeSliderValue"
            height="4px"
            width="84px"
            dot-size="12"
            drag-on-click
            :lazy="true"
            :silent="true"
            class="ml-2 theme-black"
          ></vue-slider>
        </div>
        <div class="w-10 h-10 button-base">
          <ViaSvgIcon
            name="arrow-up"
            class="text-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViaPlay',
  props: {
    isPlayInfo: {
      type: Boolean,
    },
  },
  emits: ['update:isPlayInfo'],
  data() {
    return {
      playSliderValue: 20,
      volumeSliderValue: 20,
    };
  },
};
</script>

<style lang="postcss" scoped>
</style>
