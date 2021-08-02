<template>
  <ViaGrid
    cols="3"
    gap-y="4px"
    gap-x="8px"
  >
    <ViaGridItem
      v-for="(item, index) in coverRowGroupData"
      :key="index"
    >
      <ViaCoverRow
        v-bind="item"
        class="p-2 hover:bg-gray-100 rounded-xl"
      />
    </ViaGridItem>
  </ViaGrid>
</template>

<script>
import { ViaGrid, ViaGridItem } from '@/components/ViaGrid';
import ViaCoverRow from '@/views/__components__/ViaCoverRow';

export default {
  components: {
    ViaGrid,
    ViaGridItem,
    ViaCoverRow,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    coverRowGroupData() {
      return this.data;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
