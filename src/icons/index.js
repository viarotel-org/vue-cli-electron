import ViaSvgIcon from '@/components/ViaSvgIcon'; // svg component

export default {
  install(app) {
    app.component('ViaSvgIcon', ViaSvgIcon);
  },
};

const svgs = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);

requireAll(svgs);
