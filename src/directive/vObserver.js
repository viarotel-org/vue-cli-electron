let MO;
export default function install(app) {
  app.directive('observer', {
    mounted(el, binding) {
      const {
        modifiers: params,
        value: callback,
      } = binding;
      if (MO) MO.disconnect();
      MO = new MutationObserver(callback);
      MO.observe(el, params);
    },
    unmounted() {
      if (MO) MO.disconnect();
    },
  });
}
