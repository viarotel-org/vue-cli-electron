<template>
  <component
    :is="componentData.name"
    v-bind="componentData.props"
    :data="libraryData"
  ></component>
</template>

<script>
import ViaCoverColGroup from '@/views/__components__/ViaCoverColGroup';
import ViaCoverRowGroup from '@/views/__components__/ViaCoverRowGroup';

export default {
  components: {
    ViaCoverColGroup,
    ViaCoverRowGroup,
  },
  props: {
    type: String,
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentModel: {
        allSongSheets: {
          name: 'ViaCoverColGroup',
          props: {
            type: 'square',
            cols: 5,
            gap: '24px',
          },
          request: () => {},
          formatData: (data) => data,
        },
        createSongSheets: {
          name: 'ViaCoverColGroup',
          props: {
            type: 'square',
            cols: 5,
            gap: '24px',
          },
          request: () => {},
          formatData: (data) => data,
        },
        likeSongSheets: {
          name: 'ViaCoverColGroup',
          props: {
            type: 'square',
            cols: 5,
            gap: '24px',
          },
          request: () => {},
          formatData: (data) => data,
        },
        album: {
          name: 'ViaCoverColGroup',
          props: {
            type: 'square',
            cols: 5,
            gap: '24px',
          },
          request: () => {},
          formatData: (data) => data,
        },
        singer: {
          name: 'ViaCoverColGroup',
          props: {
            type: 'rounded',
            cols: 5,
            gap: '24px',
          },
          request: () => {},
          formatData: (data) => data,
        },
        mv: {
          name: 'ViaCoverColGroup',
          props: {
            type: 'rectangle',
            cols: 5,
            gap: '24px',
          },
          request: () => {},
          formatData: (data) => data,
        },
        cloudDisk: {
          name: 'ViaCoverRowGroup',
          props: {
            size: 'small',
            type: 'square',
            cols: 1,
            gap: '4px',
          },
          request: () => {},
          formatData: (data) => data,
        },
      },
    };
  },
  computed: {
    libraryData() {
      return this.data;
    },
    componentData() {
      return this.componentModel[this.type];
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
