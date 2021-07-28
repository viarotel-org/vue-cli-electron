<template>
  <div
    ref="viaScrollbar"
    class="via-scrollbar"
    @scroll.stop="handleCurrentScroll"
    @mouseover.stop="setLock($event, true)"
  >
    <div
      class="w-px-10"
      :style="{
        height: scrollHeight + 'px',
      }"
    ></div>
  </div>
</template>

<script>
import { throttle as _throttle } from 'lodash-es';

export default {
  name: 'ViaScrollbar',
  props: {
    target: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      scrollHeight: 0,
      lock: false,
      scrollScale: 1,
    };
  },
  computed: {
    parentRefs() {
      return this.$parent.$refs[this.target];
    },
    currentRefs() {
      return this.$refs.viaScrollbar;
    },
  },
  created() {
    window.addEventListener('onload', this.init);
    window.addEventListener('resize', this.init);
    this.setLock = _throttle(this.setLock, 500);
  },
  mounted() {
    this.parentRefs.addEventListener('scroll', this.handleParentScroll);
    this.parentRefs.addEventListener('mouseover', this.setLock);
    this.parentRefs.classList.add('parent-scroll-transition');
    this.init();
  },
  unmounted() {
    window.removeEventListener('onload', this.init);
    window.removeEventListener('resize', this.init);
    this.parentRefs.removeEventListener('scroll', this.handleParentScroll);
    this.parentRefs.removeEventListener('mouseover', this.setLock);
  },
  methods: {
    async init() {
      await this.$nextTick();
      this.getScrollHeight();
      this.getScrollScale();
    },
    refresh() {
      this.init();
    },
    getScrollHeight() {
      this.scrollHeight = this.parentRefs.scrollHeight;
      // console.log('scrollHeight', this.scrollHeight);
    },
    getScrollScale() {
      const parentCanScrollHeight = this.scrollHeight - this.parentRefs.clientHeight;
      const currentCanScrollHeight = this.scrollHeight - this.currentRefs.clientHeight;
      this.scrollScale = currentCanScrollHeight / parentCanScrollHeight;
      // console.log('this.scrollScale', this.scrollScale);
    },
    setLock(_e, value = false) {
      // console.log('setLock', value);
      this.lock = value;
    },
    handleCurrentScroll(e) {
      if (!this.lock) return;
      // console.log('handleCurrentScroll');
      const { scrollTop } = e.target;
      this.parentRefs.scrollTop = scrollTop / this.scrollScale;
    },
    handleParentScroll(e) {
      if (this.lock) return;
      // console.log('handleParentScroll');
      const { scrollTop } = e.target;
      this.currentRefs.scrollTop = scrollTop * this.scrollScale;
    },
  },
};
</script>

<style lang="postcss" scoped>
.parent-scroll-transition:hover .via-scrollbar {
  @apply opacity-100 translate-x-0;
}

.via-scrollbar {
  @apply fixed inset-y-0 right-0 z-10 overflow-auto transition-all duration-300 opacity-0 translate-x-px-10;
}

.via-scrollbar::-webkit-scrollbar {
  -webkit-appearance: none;
  @apply !w-px-10 !h-px-10;
}

.via-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-gray-400 border-2 border-solid border-transparent rounded-full bg-clip-padding;
}

.via-scrollbar:hover::-webkit-scrollbar-thumb {
  @apply bg-gray-500;
}
</style>
