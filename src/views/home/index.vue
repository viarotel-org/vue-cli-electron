<template>
  <div class="">
    <div class="py-6">
      <ViaTitle
        name="by Apple Music"
        class=""
      />
      <ViaCoverGroup
        cols="5"
        gap="24px"
        class="pt-6 pb-3"
        :data="coverGroupData"
      />
    </div>
    <div class="py-6">
      <ViaTitle
        name="推荐歌单"
        desc="查看全部"
        class=""
      />
      <ViaCoverGroup
        class="pt-6 pb-3"
        cols="5"
        gap="24px"
        :data="coverGroupData"
      />
    </div>
    <div class="py-6">
      <ViaTitle
        name="For You"
        class=""
      />
      <ViaForYou class="pt-6 pb-3" />
    </div>
    <div class="py-6">
      <ViaTitle
        name="推荐艺人"
        class=""
      />
      <ViaCoverGroup
        class="pt-6 pb-3"
        cols="6"
        gap="24px"
        :data="coverGroupData"
        type="rounded"
      />
    </div>
    <div class="py-6">
      <ViaTitle
        name="新专速递"
        desc="查看全部"
        class=""
      />
      <ViaCoverGroup
        class="pt-6 pb-3"
        cols="5"
        gap="24px"
        :data="coverGroupData"
      />
    </div>
    <div class="py-6">
      <ViaTitle
        name="排行榜"
        desc="查看全部"
        class=""
      />
      <ViaCoverGroup
        class="pt-6 pb-3"
        cols="5"
        gap="24px"
        :data="coverGroupData"
      />
    </div>
  </div>
</template>

<script>
import savePosition from '@/mixins/savePosition';
import ViaTitle from '@/views/__components__/ViaTitle';
import ViaCoverGroup from '@/views/__components__/ViaCoverGroup';
import ViaForYou from '@/views/home/__components__/ViaForYou';

export default {
  name: 'Home',
  components: { ViaTitle, ViaCoverGroup, ViaForYou },
  mixins: [savePosition],
  data() {
    return {};
  },
  computed: {
    coverGroupData() {
      return [
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
      ];
    },
  },
  mounted() {},
};
</script>

<style>
</style>
