<template>
  <div class="flex space-x-4 h-58">
    <div class="flex-1 w-1">
      <Recommend class="h-full" />
    </div>
    <div class="flex-1 w-1">
      <PrivateFM class="h-full" />
    </div>
  </div>
</template>

<script>
import Recommend from './Recommend.vue';
import PrivateFM from './PrivateFM.vue';

export default {
  name: 'ViaForYou',
  components: { Recommend, PrivateFM },
};
</script>

<style lang="postcss" scoped>
</style>
