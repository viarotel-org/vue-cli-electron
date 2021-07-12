import { toast } from '@/utils/modal';
import request from '@/request';

export default {
  namespaced: true,
  state: () => ({
    downCount: 0,
  }),
  getters: {},
  mutations: {
    setDownCount(state, value) {
      state.downCount = value;
    },
  },
  actions: {
    // 获取短信验证码
    async getSmsCode({ commit, state }, params) {
      if (state.downCount === 0) {
        const { msg } = await request.getSmsCode(params);
        commit('setDownCount', 60);
        const timer = setInterval(() => {
          if (state.downCount > 0) {
            commit('setDownCount', state.downCount - 1);
          } else {
            clearInterval(timer);
          }
        }, 1000);

        toast.success(msg);
      }
    },
  },
};
