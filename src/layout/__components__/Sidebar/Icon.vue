<template>
  <i
    v-if="isElIcon"
    :class="name"
  ></i>
  <ViaSvgIcon
    v-else
    class="mr-2 text-2xl align-middle"
    :name="name"
  ></ViaSvgIcon>
</template>

<script>
import ViaSvgIcon from '@/components/ViaSvgIcon.vue';

export default {
  components: { ViaSvgIcon },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    isElIcon() {
      return this.name.includes('el-icon');
    },
  },
};
</script>

<style></style>
