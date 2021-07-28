<template>
  <div
    class="bg-white bg-opacity-80 backdrop-filter backdrop-saturate-150 backdrop-blur-lg"
  >
    <ViaSystemBars class="" />
    <ViaNavBar class="" />
  </div>
</template>

<script>
import ViaSystemBars from '@/components/ViaSystemBars';
import ViaNavBar from '@/views/__components__/ViaNavBar';

export default {
  components: {
    ViaSystemBars,
    ViaNavBar,
  },
};
</script>

<style>
</style>
