<template>
  <div
    class="via-grid-item"
    :style="{
      marginTop: childElementIndex + 1 > parentProps.cols ? gapMap.y : '',
      marginRight: (childElementIndex + 1) % parentProps.cols ? gapMap.x : '',
      width: `calc(100% / ${parentProps.cols} - ${gapMap.x} * (${parentProps.cols} - 1) / ${parentProps.cols})`,
    }"
    @click="$emit('click', childElementIndex)"
  >
    <div
      v-if="parentProps.square"
      class="relative"
      :style="{
        paddingBottom: parentProps.square ? '100%' : '',
      }"
    >
      <div
        class="absolute inset-0 overflow-hidden"
        :class="customClass"
        :style="[roundedMap, customStyle]"
      >
        <slot></slot>
      </div>
    </div>

    <div
      v-else
      class="relative h-full"
      :class="customClass"
      :style="[roundedMap, customStyle]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViaGridItem',
  inject: ['parentProps'],
  props: {
    customStyle: {
      type: [Object],
      default: () => {},
    },
    customClass: {
      type: [String],
      default: '',
    },
  },
  emits: ['click'],
  data() {
    return {
      childElementIndex: 0,
      childElementCount: 0,
    };
  },
  computed: {
    roundedMap() {
      let tempData = {};
      const rounded = this.parentProps.rounded;
      if (rounded) {
        tempData = {
          borderTopLeftRadius: this.childElementIndex === 0 ? rounded : '',
          borderTopRightRadius:
            this.childElementIndex === this.parentProps.cols - 1 ? rounded : '',
          borderBottomLeftRadius:
            this.childElementIndex
            === this.childElementCount - this.parentProps.cols
              ? rounded
              : '',
          borderBottomRightRadius:
            this.childElementIndex === this.childElementCount - 1
              ? rounded
              : '',
        };
      }
      return tempData;
    },
    gapMap() {
      return {
        x: this.parentProps.gapX || this.parentProps.gap,
        y: this.parentProps.gapY || this.parentProps.gap,
      };
    },
  },
  async mounted() {
    await this.$nextTick();
    this.childElementIndex = this.nodeIndex(this.$el);
    this.childElementCount = this.$el.parentNode.childElementCount;
  },
  methods: {
    nodeIndex(el) {
      return Array.prototype.findIndex.call(
        el.parentNode.children,
        (item) => el === item,
      );
    },
  },
};
</script>
<style lang="postcss" scoped>
</style>
