<template>
  <ViaGrid
    class="via-cover-group"
    v-bind="$attrs"
  >
    <ViaGridItem
      v-for="(item, index) in coverGroupData"
      :key="index"
    >
      <ViaCover
        v-bind="type ? { type } : {}"
        :data="item"
        class=""
      />
    </ViaGridItem>
  </ViaGrid>
</template>

<script>
import { ViaGrid, ViaGridItem } from '@/components/ViaGrid';
import ViaCover from '@/views/__components__/ViaCover';

export default {
  components: {
    ViaGrid,
    ViaGridItem,
    ViaCover,
  },
  props: {
    type: String,
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    coverGroupData() {
      return this.data;
    },
  },
};
</script>

<style>
</style>
