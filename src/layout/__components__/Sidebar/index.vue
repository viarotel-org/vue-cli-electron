<template>
  <!-- isCollapse ? '-translate-x-50 absolute' : 'translate-x-0 relative', -->
  <div
    :class="[
      'transition-all duration-500 h-full bg-white relative',
      isCollapse ? 'w-0' : ' w-50',
    ]"
  >
    <el-menu
      :default-active="defaultActive"
      class="w-full h-full overflow-x-hidden overflow-y-auto scrollbar-beautiful"
      router
    >
      <SidebarItem
        v-for="(item, index) of menuData"
        :key="index"
        :item="item"
      />
    </el-menu>
    <FoldButton v-model="isCollapse" />
  </div>
</template>

<script>
import FoldButton from './FoldButton.vue';
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Sidebar',
  components: { FoldButton, SidebarItem },
  data() {
    return {
      isCollapse: false,
      menuData: [],
      defaultActive: '',
    };
  },

  created() {
    this.getMenuData(this.$route.matched[0].children);
    this.defaultActive = this.$route.path;
  },
  methods: {
    getMenuData(arr = []) {
      this.menuData = arr.map((item) => ({
        title: item.meta.title,
        path: item.path,
        icon: item.meta.icon,
        ...(item.children && item.children.length
          ? {
            children: this.getMenuData(item.children),
          }
          : {}),
      }));
    },
  },
};
</script>

<style>
</style>
