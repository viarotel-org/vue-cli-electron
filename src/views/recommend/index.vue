<template>
  <div class="">
    <div class="flex flex-col items-center pt-42">
      <div class="font-bold text-red-600 text-8xl animation-leading-4">
        每日歌曲推荐
      </div>
      <div class="mt-8 text-xl animation-leading-1">
        根据你的音乐口味生成 · 每天 <span class="font-bold">6:00 </span>更新
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
  name: 'Recommend',
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
}
.animation-leading-1 {
  animation-duration: 0.8s;
  animation-name: keyframes-leading-1;
}
</style>
