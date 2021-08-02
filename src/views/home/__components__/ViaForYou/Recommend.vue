<template>
  <div class="relative flex items-center overflow-hidden bg-gray-700 rounded-2xl">
    <img
      :src="coverImage"
      class="image-animate-move"
      alt=""
    />

    <div
      class="
        font-bold
        leading-[1.15]
        tracking-widest
        text-white text-7xl
        ml-6
        opacity-90
        hover:opacity-100
        button-rotate-bigger
      "
    >
      每日
      <br />
      推荐
    </div>
    <div
      class="
        absolute
        bottom-6
        right-6
        w-14
        h-14
        flex
        items-center
        justify-center
        text-white
        transition-all
        duration-300
        rounded-full
        backdrop-filter backdrop-saturate-200 backdrop-blur-lg
        hover:!bg-opacity-30
        bg-white bg-opacity-10
        cursor-pointer
        active:!scale-95
      "
    >
      <ViaSvgIcon
        name="play"
        class="!w-2/5 !h-2/5 mt-px ml-px-3"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    coverImage() {
      return this.$tempImage();
    },
  },
};
</script>

<style lang="postcss" scoped>
.image-animate-move {
  @apply absolute top-0 left-0 w-full;
  animation: move 38s infinite;
  animation-direction: alternate;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
