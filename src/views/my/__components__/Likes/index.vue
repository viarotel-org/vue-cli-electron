<template>
  <div class="flex h-66">
    <div class="flex-grow w-1">
      <Card class="h-full" />
    </div>
    <div class="w-1 ml-12 flex-grow-2">
      <List
        :data="listData"
        class="h-full"
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
import List from './List.vue';

export default {
  name: 'Likes',
  components: {
    Card,
    List,
  },
  computed: {
    listData() {
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
      ];
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
