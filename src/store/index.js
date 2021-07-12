import {
  createStore,
} from 'vuex';
import getters from './getters';

const getModules = (banObj) => {
  const files = require.context('./modules', true, /\.js$/);
  const rules = (path) => path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  const isBan = (path) => {
    const tempBool = banObj[rules(path)];
    return typeof tempBool === 'boolean' && !tempBool;
  };
  const filePathArr = files.keys().filter((path) => !isBan(path));
  return filePathArr.reduce((obj, path) => {
    const name = rules(path);
    obj[name] = {
      ...files(path).default,
      namespaced: true,
    };
    return obj;
  }, {});
};

const modules = getModules({
  // sms: false,
});

// console.log("modules", modules);

export default createStore({
  modules,
  getters,
});
