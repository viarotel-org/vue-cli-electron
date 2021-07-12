<template>
  <el-submenu
    v-if="isChildren"
    :index="item.path"
  >
    <template #title>
      <icon
        v-if="item.icon"
        :name="item.icon"
      ></icon>
      <span class="">{{ item.title }}</span>
    </template>
    <sidebar-item
      v-for="(iItem, iIndex) of item.children"
      :key="iIndex"
      :item="iItem"
    ></sidebar-item>
  </el-submenu>
  <el-menu-item
    v-else
    :index="item.path"
    class=""
  >
    <icon
      v-if="item.icon"
      :name="item.icon"
    ></icon>
    <template #title>
      <span>{{ item.title }}</span>
    </template>
  </el-menu-item>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'SidebarItem',
  components: { Icon },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isChildren() {
      return this.item.children && this.item.children.length;
    },
  },
  methods: {},
};
</script>

<style></style>
