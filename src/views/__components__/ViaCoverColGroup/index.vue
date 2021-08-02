<template>
  <ViaGrid
    class="via-cover-group"
    v-bind="$attrs"
  >
    <ViaGridItem
      v-for="(item, index) in coverGroupData"
      :key="index"
    >
      <ViaCoverCol
        v-bind="{
          ...(type ? { type } : {}),
          ...(size ? { size } : {}),
          ...item,
        }"
        class=""
      />
    </ViaGridItem>
  </ViaGrid>
</template>

<script>
import { ViaGrid, ViaGridItem } from '@/components/ViaGrid';
import ViaCoverCol from '@/views/__components__/ViaCoverCol';

export default {
  components: {
    ViaGrid,
    ViaGridItem,
    ViaCoverCol,
  },
  props: {
    size: String,
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
