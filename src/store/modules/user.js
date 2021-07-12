import {
  sessionStorage,
} from '@/utils/storages';
import request from '@/request';

export default {
  namespaced: true,
  state: () => ({
    userData: {
      authPageList: ['admin', 'test'],
    },
    token: sessionStorage.get('token'),
  }),
  getters: {},
  mutations: {
    setUserData(state, data) {
      state.userData = {
        ...data,
      };
    },
    removeToken(state) {
      state.token = '';
      sessionStorage.remove('token');
    },
    setToken(state, token) {
      state.token = token;
      sessionStorage.set('token', token);
    },
  },
  actions: {
    // 获取用户详情
    async getUserData({
      commit,
    }, {
      params = {},
      options = {},
    } = {}) {
      const {
        data = {},
      } = await request.getUserData(params, options);
      const formatData = {
        ...data,
        id: data.id,
        avatar: data.avatar,
        nickname: data.nickname,
        birthday: data.birthday,
        sex: data.sex, // 0保密 1男 2女
        areaInfo: data.areaInfo,
        phoneNumber: data.phoneNumber,
        realname: data.realname,
        email: data.email,
      };
      commit('setUserData', formatData);
      return formatData;
    },
  },
};
