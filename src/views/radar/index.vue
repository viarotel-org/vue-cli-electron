<template>
  <div class="">
    <div class="flex flex-col items-center pt-42">
      <div class="font-bold text-teal-500 text-8xl animation-leading-4 spc">
        私人雷达
      </div>
      <div class="mt-8 text-xl animation-leading-1">
        AI RADAR · 每日更新
      </div>
      <div class="flex items-center mt-8 space-x-6">
        <div class="h-12 px-5 button-scale red">
          <ViaSvgIcon
            name="play"
            class="text-xl"
          />
          <span class="ml-2 text-lg font-bold">播放</span>
        </div>
        <div class="w-12 h-12 button-scale gray">
          <ViaSvgIcon
            name="heart"
            class="text-xl"
          />
        </div>
        <div
          v-contextmenu:contextmenu="{ trigger: 'click' }"
          class="w-12 h-12 button-scale gray"
        >
          <ViaSvgIcon
            name="more"
            class="text-xl"
          />
        </div>
      </div>
    </div>
    <div class="relative">
      <ViaSearch
        v-if="isSearch"
        v-model="searchValue"
        class="absolute right-0 top-10"
      />
      <ViaCoverRowGroup
        cols="1"
        :data="songData"
        class="pt-36"
      />
    </div>
    <v-contextmenu ref="contextmenu">
      <template
        v-for="(item, index) of moreModel"
        :key="index"
      >
        <v-contextmenu-item @click="item.click">
          {{ item.label }}
        </v-contextmenu-item>
        <v-contextmenu-divider v-if="item.divider" />
      </template>
    </v-contextmenu>
  </div>
</template>

<script>
import ViaSearch from '@/views/__components__/ViaSearch .vue';
import ViaCoverRowGroup from '@/views/__components__/ViaCoverRowGroup';

export default {
  name: 'Radar',
  components: {
    ViaSearch,
    ViaCoverRowGroup,
  },
  data() {
    return {
      isSearch: false,
      searchValue: '',
      songData: [
        {
          title: '今天从《声声慢》听起|私人雷达',
          desc: '根据你喜欢的单曲《最天使》',
          image: this.$tempImage(),
          active: true,
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
        {
          title:
            '今天从《声声慢》听起|私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          desc: '根据你喜欢的单曲《最天使》推荐私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达私人雷达',
          image: this.$tempImage(),
        },
      ],
    };
  },
  computed: {
    moreModel() {
      return [
        {
          label: '保存到音乐库',
          value: 'saveToLibrarys',
          click: this.saveToLibrarys,
          divider: true,
        },
        {
          label: '歌单内搜索',
          value: 'searchCurrentSongSheet',
          click: this.showSearch,
        },
      ];
    },
  },
};
</script>

<style lang="postcss" scoped>
.button-scale {
  &.red {
    @apply text-red-600 bg-red-50;
  }
  &.gray {
    @apply text-gray-800 bg-gray-100;
  }
  @apply hover:scale-105 active:scale-95 transition-all flex items-center justify-center rounded-lg cursor-pointer;
}
@keyframes keyframes-leading-4 {
  from {
    letter-spacing: 0px;
  }

  to {
    letter-spacing: 4px;
  }
}

@keyframes keyframes-leading-1 {
  from {
    letter-spacing: 0px;
  }

  to {
    letter-spacing: 1px;
  }
}

.animation-leading-4 {
  animation-duration: 0.8s;
  animation-name: keyframes-leading-4;
  letter-spacing: 4px;
}
.animation-leading-1 {
  animation-duration: 0.8s;
  animation-name: keyframes-leading-1;
  letter-spacing: 1px;
}
</style>
