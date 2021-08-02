<template>
  <ViaGrid
    class="via-cover-group"
    v-bind="$attrs"
  >
    <ViaGridItem
      v-for="(item, index) in coverGroupData"
      :key="index"
      custom-class="flex items-center p-3 transition-all hover:bg-gray-100 rounded-xl"
    >
      <ViaCoverRow
        v-bind="{
          ...(type ? { type } : {}),
          ...(size ? { size } : {}),
          ...item,
        }"
        class="w-1 flex-grow-3"
      />
      <div
        class="w-1 mx-8 text-lg text-gray-700 truncate cursor-pointer flex-grow-2 hover:underline"
      >
        {{ item.desc }}
      </div>
      <div class="flex-grow w-1 font-bold text-right text-gray-700">4:05</div>
    </ViaGridItem>
  </ViaGrid>
</template>

<script>
import { ViaGrid, ViaGridItem } from '@/components/ViaGrid';
import ViaCoverRow from '@/views/__components__/ViaCoverRow';

export default {
  name: 'ViaCoverRowGroup',
  components: {
    ViaGrid,
    ViaGridItem,
    ViaCoverRow,
  },
  props: {
    type: String,
    size: String,
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
