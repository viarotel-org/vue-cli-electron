<template>
  <div class="">
    <div class="mt-6 text-6xl font-bold">发现</div>
    <div class="flex flex-wrap mt-12">
      <div
        v-for="(item, index) of sortData"
        :key="index"
        class="px-5 py-2 mb-5 mr-5 text-xl font-bold cursor-pointer  rounded-xl active:scale-95 active:shadow-inner"
        :class="
          sortActive === index
            ? 'bg-red-50 text-red-600'
            : 'bg-gray-100 text-gray-600'
        "
        @click="onSortDataItem(index)"
      >
        {{ item.label }}
      </div>
    </div>
    <div
      v-if="sortActiveItem.value === 'more'"
      class="px-10 py-5 space-y-10 bg-gray-100 rounded-xl"
    >
      <div
        v-for="(item, index) of moreSortData"
        :key="index"
        class="flex items-start"
      >
        <div class="flex-none text-3xl font-bold text-gray-700">
          {{ item.label }}
        </div>
        <ViaGrid
          :cols="moreSortCols"
          class="flex-1 ml-10 -translate-y-1"
          gap-y="8px"
        >
          <ViaGridItem
            v-for="(iItem, iIndex) of item.value"
            :key="iIndex"
          >
            <div
              class="inline-block px-5 py-2 text-lg cursor-pointer  rounded-xl active:scale-95 hover:bg-red-50 hover:text-red-600"
              :class="
                checkSortData(iItem.label).isExist
                  ? 'text-red-600 active:shadow-inner'
                  : ''
              "
              @click="onMoreSortItem(iItem)"
            >
              {{ iItem.label }}
            </div>
          </ViaGridItem>
        </ViaGrid>
      </div>
    </div>
    <ViaCoverGroup
      cols="5"
      gap="24px"
      class="pt-6"
      :data="coverGroupData"
    />
    <div class="flex justify-center py-8">
      <div
        class="
          inline-block
          px-5
          py-2
          text-xl
          font-bold
          text-gray-700
          !bg-gray-100
          rounded-lg
          button-base
        "
      >
        加载更多
      </div>
    </div>
  </div>
</template>

<script>
import savePosition from '@/mixins/savePosition';
import { ViaGrid, ViaGridItem } from '@/components/ViaGrid';
import ViaCoverGroup from '@/views/__components__/ViaCoverGroup';

export default {
  name: 'Found',
  components: { ViaGrid, ViaGridItem, ViaCoverGroup },
  mixins: [savePosition],
  data() {
    return {
      sortData: [
        {
          type: 'all',
          label: '全部',
          value: 'all',
        },
        {
          type: 'sort',
          label: '推荐歌单',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'sort',
          label: '精选',
          value: 'sort',
        },
        {
          type: 'more',
          label: '···',
          value: 'more',
        },
      ],
      sortActive: 0,
      moreSortData: [
        {
          label: '语种',
          value: [
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
          ],
        },
        {
          label: '语种',
          value: [
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
          ],
        },
        {
          label: '语种',
          value: [
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
          ],
        },
        {
          label: '语种',
          value: [
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
          ],
        },
        {
          label: '语种',
          value: [
            {
              label: '华语',
              value: '',
            },
            {
              label: '欧美',
              value: '',
            },
            {
              label: '日语',
              value: '',
            },
            {
              label: '韩语',
              value: '',
            },
            {
              label: '粤语',
              value: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    sortActiveItem() {
      return this.sortData[this.sortActive] || {};
    },
    moreSortCols() {
      let value = 8;
      if (this.$grid['2xl']) {
        value = 12;
      }
      return value;
    },
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
  methods: {
    onSortDataItem(index) {
      if (this.sortActive === index) {
        if (this.sortActiveItem.type === 'more') {
          this.sortActive = 0;
          return;
        }
        this.sortActive = -1;
      } else {
        this.sortActive = index;
      }
    },
    checkSortData(value, key = 'label') {
      const index = this.sortData.findIndex((item) => item[key] === value);
      return { index, isExist: index !== -1 };
    },
    onMoreSortItem(item) {
      const { isExist, index } = this.checkSortData(item.label);
      if (isExist) {
        this.sortData.splice(index, 1);
      } else {
        this.sortData.splice(-1, 0, item);
      }
      this.sortActive = this.sortData.length - 1;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
