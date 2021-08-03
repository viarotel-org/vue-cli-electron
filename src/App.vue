<template>
  <div
    ref="scrollContainer"
    v-observer.childList.subtree="onObserver"
    class="absolute inset-0 h-full overflow-x-hidden overflow-y-auto scrollbar-none"
  >
    <ViaHeader class="sticky inset-x-0 top-0 z-10" />

    <div class="relative min-h-screen py-8 px-resize">
      <ViaRouterView class="" />
    </div>

    <ViaFooter
      v-model:isPlayInfo="isPlayInfo"
      class="sticky inset-x-0 bottom-0 z-10"
    />

    <ViaPlayInfo v-model="isPlayInfo" />

    <ViaScrollbar
      ref="viaScrollbar"
      target="scrollContainer"
      class="!top-[88px] !bottom-[64px]"
    />
  </div>

  <ViaDragBars :width="dragBarsWidth" />
</template>

<script>
import ViaHeader from '@/views/__components__/ViaHeader/index.vue';
import ViaRouterView from '@/components/ViaRouterView.vue';
import ViaFooter from '@/views/__components__/ViaPlay/index.vue';
import ViaPlayInfo from '@/views/__components__/ViaPlayInfo/index.vue';
import ViaScrollbar from '@/components/ViaScrollbar/index.vue';
import ViaDragBars from '@/components/ViaDragBars.vue';

export default {
  name: 'App',
  components: {
    ViaHeader,
    ViaRouterView,
    ViaFooter,
    ViaPlayInfo,
    ViaScrollbar,
    ViaDragBars,
  },
  data() {
    return {
      isPlayInfo: false,
    };
  },
  computed: {
    dragBarsWidth() {
      return this.isPlayInfo ? '100%' : 'calc(100% - 3 * 3.5rem)';
    },
  },
  mounted() {},
  methods: {
    onObserver() {
      this.$refs.viaScrollbar.refresh();
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
