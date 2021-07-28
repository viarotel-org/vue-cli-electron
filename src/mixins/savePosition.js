export default {
  data() {
    return {
      savePositionConfig: {
        target: null,
        scrollTop: 0, // 记录滚动条高度
      },
    };
  },
  mounted() {
    this.savePositionConfig.target = this.$root.$refs.scrollContainer;
  },
  activated() {
    if (this.savePositionConfig.target) {
      this.savePositionConfig.target.scrollTop = this.savePositionConfig.scrollTop;
    }
  },
  deactivated() {
    if (this.savePositionConfig.target) {
      this.savePositionConfig.scrollTop = this.savePositionConfig.target.scrollTop;
    }
  },
};
