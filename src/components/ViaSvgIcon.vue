<template>
  <div
    v-if="isExternalExe"
    v-bind="$attrs"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />
  <svg
    v-else
    v-bind="$attrs"
    class="svg-icon"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'ViaSvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternalExe() {
      return this.isExternal(this.iconClass);
    },
    iconClass() {
      return this.name;
    },
    iconName() {
      return `#svg-${this.iconClass}`;
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
      };
    },
  },
  methods: {
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.25em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
