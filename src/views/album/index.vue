<template>
  <div class="">
    <ViaCoverRow
      :image="$tempImage()"
      size="biger"
      show-icon
      show-shadow
      class="!items-stretch"
    >
      <div class="ml-16">
        <div class="text-6xl font-bold leading-tight line-clamp-3">
          古典风格法国山豆根山豆根法国岁的法国反对风格士大夫
        </div>
        <div class="mt-8">
          <div class="text-lg">
            <span class="">Single by Pond</span>
            <span class="ml-1 font-bold hover:underline">云音乐官方歌单</span>
          </div>
          <div class="text-gray-700">最后更新于 2021年05月08日 · 35 首歌</div>
        </div>
        <div
          class="mt-8 text-gray-700 transition-all line-clamp-3 hover:text-gray-700"
        >
          黄家驹（1962年6月10日—1993年6月30日），出生于中国香港，中国香港男歌手、原创音乐人、吉他手、摇滚乐队Beyond的主唱、节奏吉他手及创队成员。
          1983年以歌曲《大厦》出道，并组建Beyond乐队，担任主唱。1988年凭借专辑《秘密警察》在香港歌坛获得关注，其中由黄家驹创作的歌曲《大黄家驹（1962年6月10日—1993年6月30日），出生于中国香港，中国香港男歌手、原创音乐人、吉他手、摇滚乐队Beyond的主唱、节奏吉他手及创队成员。
          1983年以歌曲《大厦》出道，并组建Beyond乐队，担任主唱。1988年凭借专辑《秘密警察》在香港歌坛获得关注，其中由黄家驹创作的歌曲《大
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
    </ViaCoverRow>
    <SongGroup
      :data="songData"
      class="mt-16"
    />
    <div class="py-8 text-sm text-gray">
      <div class="">发行于 2021年09月01日</div>
      <div class="mt-1">© 海蝶音乐</div>
    </div>
    <div class="py-6 border-t">
      <ViaTitle
        name="More by 孔令奇"
        class=""
      />
      <ViaCoverColGroup
        class="pt-6 pb-3"
        cols="5"
        gap="24px"
        :data="albumData"
        @click-item="onAlbumInfo({ id: 'album' })"
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
import ViaTitle from '@/views/__components__/ViaTitle';
import ViaCoverRow from '@/views/__components__/ViaCoverRow';
import ViaCoverColGroup from '@/views/__components__/ViaCoverColGroup';
import SongGroup from './__components__/SongGroup';

export default {
  name: 'Album',
  components: {
    ViaTitle,
    ViaCoverRow,
    ViaCoverColGroup,
    SongGroup,
  },
  data() {
    return {
      moreActive: 0,
      albumData: [
        {
          title: '今天从《声声慢》听起|私人雷达',
          desc: '根据你喜欢的单曲《最天使》',
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
      songData: [
        {
          title: '今天从《声声慢》听起|私人雷达',
          desc: '根据你喜欢的单曲《最天使》',
          image: this.$tempImage(),
          active: true,
          like: true,
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
          label: '添加到歌单',
          value: 'addSonglist',
          click: this.addSonglist,
        },
        {
          label: '复制链接',
          value: 'copySongUrl',
          click: this.copySongUrl,
        },
      ];
    },
    moreActiveData() {
      return this.moreModel[this.moreActive];
    },
  },
  methods: {
    onAlbumInfo({ id }) {
      this.$router.push({ path: '/album', query: { id } });
    },
    saveToLibrarys() {
      console.log('saveToLibrarys');
    },
    addSonglist() {
      console.log('addSonglist');
    },
    copySongUrl() {
      console.log('copySongUrl');
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
</style>
