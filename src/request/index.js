// import request from '@/utils/request';

export default {
  getUserData() {
    return {
      data: {
        id: 'data.id',
        avatar: 'data.avatar',
        nickname: 'data.nickname',
        birthday: 'data.birthday',
        sex: ' data.sex', // 0保密 1男 2女
        areaInfo: 'data.areaInfo',
        phoneNumber: 'data.phoneNumber',
        realname: 'data.realname',
        email: 'data.email',
      },
    };
  },
};
