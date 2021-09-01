<template>
  <ViaGrid
    class="via-cover-group"
    v-bind="{
      cols: 1,
      ...$attrs,
    }"
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
        v-if="isSingleColumn"
        class="w-1 mx-8 text-lg text-gray-700 truncate cursor-pointer  flex-grow-2 hover:underline"
      >
        {{ item.desc }}
      </div>
      <div
        v-if="isSingleColumn"
        class="flex items-center justify-end flex-grow w-1 font-bold text-right text-gray-700 "
      >
        <ViaSvgIcon
          :name="item.like ? 'heart-solid' : 'heart'"
          class="hidden mt-px text-xl text-red-600 transition-transform cursor-pointer  hover:scale-105 group-hover:block"
        />
        <div class="w-16 font-mono">{{ item.duration || "0:00" }}</div>
      </div>
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
    isSingleColumn() {
      return !this.$attrs.cols;
    },
    coverGroupData() {
      return this.data;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
