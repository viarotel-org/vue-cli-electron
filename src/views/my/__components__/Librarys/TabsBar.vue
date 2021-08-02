<template>
  <div class="flex items-center justify-between h-12">
    <div class="flex items-center h-full space-x-5">
      <div
        v-for="(item, index) of tabsModel"
        :key="index"
        class="h-full px-4 text-xl font-bold button-base"
        :class="
          tabsActive === index ? 'bg-gray-100 text-gray-800' : 'text-gray-700'
        "
        @click="onTabs(index)"
      >
        <span class="">{{ item.label }}</span>
        <ViaSvgIcon
          v-if="index === 0"
          v-contextmenu:contextmenu="{ trigger: 'click' }"
          name="dropdown"
          class="pt-px pl-2 text-base scale-150"
          @click.stop
        />
      </div>
    </div>
    <div
      v-if="rightButtonData"
      class="flex items-center h-full px-3 text-gray-700 button-base"
      @click="$emit('right-button', rightButtonData.value)"
    >
      <ViaSvgIcon
        :name="rightButtonData.icon"
        class="mb-px"
      />
      <span class="ml-1">{{ rightButtonData.text }}</span>
    </div>
    <v-contextmenu ref="contextmenu">
      <template
        v-for="(item, index) of songSheetsModel"
        :key="index"
      >
        <v-contextmenu-item @click="songSheetsActive = index">
          {{ item.label }}
        </v-contextmenu-item>
        <v-contextmenu-divider v-if="item.divider" />
      </template>
    </v-contextmenu>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: 'allSongSheets',
    },
  },
  emits: ['right-button', 'update:modelValue'],
  data() {
    return {
      songSheetsModel: [
        {
          label: '全部歌单',
          value: 'allSongSheets',
          divider: true,
        },
        {
          label: '创建的歌单',
          value: 'createSongSheets',
        },
        {
          label: '收藏的歌单',
          value: 'likeSongSheets',
        },
      ],
      songSheetsActive: 0,
      tabsActive: 0,
    };
  },
  computed: {
    rightButtonData() {
      const type = this.tabsActiveData.value;
      let value = null;
      if (this.tabsActive === 0) {
        value = {
          icon: 'plus',
          text: '新建歌单',
          value: type,
        };
      } else if (type === 'cloudDisk') {
        value = {
          icon: 'arrow-up-alt',
          text: '上传歌曲',
          value: type,
        };
      }
      return value;
    },
    songSheetsActiveData() {
      return this.songSheetsModel[this.songSheetsActive];
    },
    tabsActiveData() {
      return this.tabsModel[this.tabsActive];
    },
    tabsModel() {
      return [
        {
          ...this.songSheetsActiveData,
        },
        {
          label: '专辑',
          value: 'album',
        },
        {
          label: '艺人',
          value: 'singer',
        },
        {
          label: 'MV',
          value: 'mv',
        },
        {
          label: '云盘',
          value: 'cloudDisk',
        },
      ];
    },
  },
  methods: {
    onTabs(index) {
      this.tabsActive = index;
      this.$emit('update:modelValue', this.tabsActiveData.value);
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
