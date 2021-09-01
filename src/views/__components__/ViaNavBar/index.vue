<template>
  <div class="flex items-center py-2 px-resize">
    <div class="flex items-center justify-start flex-1 space-x-2">
      <div class="w-12 h-12 button-base">
        <ViaSvgIcon
          name="arrow-left"
          class="text-3xl"
          @click="$router.back()"
        />
      </div>
      <div class="w-12 h-12 button-base">
        <ViaSvgIcon
          name="arrow-right"
          class="text-3xl"
          @click="$router.forward()"
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
      <ViaSearch
        v-model="searchValue"
        class=""
      />
      <img
        v-contextmenu:contextmenu="{ trigger: 'click' }"
        :src="$tempImage(32)"
        alt=""
        class="transition-all rounded-full cursor-pointer  w-9 h-9 opacity-80 hover:opacity-100 hover:animate-spin active:scale-95"
      />
    </div>
    <v-contextmenu ref="contextmenu">
      <template
        v-for="(item, index) of menuModel"
        :key="index"
      >
        <v-contextmenu-item @click="menuActive = index">
          {{ item.label }}
        </v-contextmenu-item>
        <v-contextmenu-divider v-if="item.divider" />
      </template>
    </v-contextmenu>
  </div>
</template>

<script>
import ViaSearch from '@/views/__components__/ViaSearch .vue';

export default {
  components: { ViaSearch },
  data() {
    return {
      searchValue: '',
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
      isLogin: false,
      menuActive: 0,
    };
  },
  computed: {
    menuModel() {
      return [
        {
          label: '设置',
          value: 'setting',
        },
        {
          ...(this.isLogin
            ? {
              label: '退出',
              value: 'logout',
            }
            : {
              label: '登录',
              value: 'login',
            }),
          divider: true,
        },
        {
          label: 'GitHub仓库',
          value: 'github',
        },
      ];
    },
  },
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
