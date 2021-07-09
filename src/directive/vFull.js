/**
 * v-full:height or v-full:width
 */
let MO;
const setCssText = (el, cssText) => {
  el.style.cssText += cssText;
  return el.style.cssText;
};
const isElement = (el) => el.nodeType === 1;
const resize = (el, parentNode) => {
  // console.log('resize')
  const {
    childNodes,
  } = parentNode;
  let cssText = '';
  childNodes.forEach((currentNode) => {
    if (!isElement(currentNode)) return;
    if (currentNode === el) {
      cssText = `
          flex: auto !important;
          overflow: hidden;
        `;
    } else {
      cssText = `
          flex: none !important;
        `;
    }
    setCssText(currentNode, cssText);
  });
};
export default function install(app) {
  app.directive('full', {
    mounted(el, binding) {
      const {
        arg: type,
      } = binding;
      const {
        parentNode,
      } = el;
      let cssText = 'display: flex !important;';
      switch (type) {
        case 'width':
          cssText += `
            flex-direction: row !important;
          `;
          break;
        default: // height
          cssText += `
              flex-direction: column !important;
            `;
          break;
      }
      setCssText(el.parentNode, cssText);
      resize(el, parentNode);
      if (MO) MO.disconnect();
      MO = new MutationObserver(() => resize(el, parentNode));
      MO.observe(parentNode, {
        childList: true,
      });
    },
    unmounted() {
      if (MO) MO.disconnect();
    },
  });
}
