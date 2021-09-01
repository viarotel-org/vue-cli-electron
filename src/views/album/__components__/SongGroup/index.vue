<template>
  <div class="song-group">
    <Item
      v-for="(item, index) of data"
      :key="index"
      v-bind="{
        ...item,
        index: index + 1,
      }"
    ></Item>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'SongGroup',
  components: { Item },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
