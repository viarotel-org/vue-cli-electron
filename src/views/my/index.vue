<template>
  <div class="">
    <div class="flex items-center">
      <ViaImage
        :src="$tempImage()"
        class="rounded-full w-14 h-14 button-rotate-bigger"
      />
      <span class="ml-4 text-5xl font-bold">Viarotel的音乐库</span>
    </div>
    <Likes class="mt-12" />
    <Librarys class="min-h-screen mt-12" />
  </div>
</template>

<script>
import savePosition from '@/mixins/savePosition';
import ViaImage from '@/components/ViaImage.vue';
import Likes from '@/views/my/__components__/Likes';
import Librarys from '@/views/my/__components__/Librarys';

export default {
  name: 'My',
  components: { ViaImage, Likes, Librarys },
  mixins: [savePosition],
  mounted() {
    console.log('this.$tailwind', this.$tailwind);
  },
};
</script>

<style lang="postcss" scoped>
</style>
