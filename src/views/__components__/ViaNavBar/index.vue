<template>
  <div class="flex items-center py-2 px-resize">
    <div class="flex items-center justify-start flex-1 space-x-2">
      <div class="w-12 h-12 button-base">
        <ViaSvgIcon
          name="arrow-left"
          class="text-3xl"
        />
      </div>
      <div class="w-12 h-12 button-base">
        <ViaSvgIcon
          name="arrow-right"
          class="text-3xl"
        />
      </div>
    </div>
    <div class="flex items-center justify-center flex-1 space-x-4">
      <div
        v-for="(item, index) of tabsData"
        :key="index"
        class="px-4 py-2 text-xl font-bold button-base"
        :class="tabsActive === index ? 'text-red-600' : ''"
        @click="onTabs({ name: item.value })"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="flex items-center justify-end flex-1 space-x-4">
      <div
        class="flex items-center px-3 py-1 transition-all duration-300 rounded-lg bg-opacity-80"
        :class="
          inputFocus ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-500'
        "
      >
        <ViaSvgIcon
          name="search"
          class="text-lg transform"
        />
        <input
          type="text"
          class="ml-2 text-lg font-bold placeholder-gray-700 bg-transparent w-44"
          :placeholder="inputFocus ? '' : '搜索'"
          @focus="inputFocus = true"
          @blur="inputFocus = false"
        />
      </div>
      <img
        :src="$tempImage(32)"
        alt=""
        class="transition-all rounded-full cursor-pointer w-9 h-9 opacity-80 hover:opacity-100 hover:animate-spin active:scale-95"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFocus: false,
      tabsData: [
        {
          label: '首页',
          value: 'home',
        },
        {
          label: '发现',
          value: 'found',
        },
        {
          label: '音乐库',
          value: 'my',
        },
      ],
      tabsActive: 0,
    };
  },
  computed: {},
  watch: {
    $route({ name }) {
      if (name) {
        this.tabsActive = this.tabsData.findIndex(
          (item) => item.value === this.$route.name,
        );
      } else {
        this.tabsActive = 0;
      }
    },
  },
  mounted() {},
  methods: {
    onTabs({ name }) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
