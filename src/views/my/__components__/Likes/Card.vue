<template>
  <div
    class="relative flex flex-col py-5 text-red-600 bg-red-100 px-7 bg-opacity-80 rounded-2xl"
  >
    <div class="flex-1">
      <div class="">给过太多悲喜</div>
      <div class="">承蒙时光洗礼</div>
      <div class="">你的多情出卖我的爱情 赔了我的命</div>
    </div>
    <div class="flex items-center justify-between flex-none">
      <div class="">
        <div class="text-2xl font-bold">我喜欢的音乐</div>
        <div class="mt-1 text-base">247首歌</div>
      </div>
      <div
        class="
          w-12
          h-12
          flex
          items-center
          justify-center
          rounded-full
          bg-red-600
          text-white
          cursor-pointer
          active:!scale-95
          hover:scale-105
          transition-all
          duration-300
        "
      >
        <ViaSvgIcon
          name="play"
          class="!w-2/5 !h-2/5 mt-px ml-px-3"
        />
      </div>
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
