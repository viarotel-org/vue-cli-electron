import req from '@/request';

export default {
  namespaced: true,
  state: () => ({
    demoData: 'hello word',
  }),
  getters: {},
  mutations: {
    setDemoData(state, data) {
      state.demoData = data;
    },
  },
  actions: {
    // 获取演示数据
    async getDemoData({ commit }, params = {}) {
      const data = await req.getDemoData(params);
      commit('setDemoData', data.data);
      return data;
    },
  },
};
