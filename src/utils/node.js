const nodePath = require('path');

module.exports = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  /**
   * @description 判断文件或文件是否存在
   * @param {*} path 路径
   * @returns {boolean}
   */
  isExist(path) {
    const {
      accessSync,
    } = require('fs');
    let value = true;
    try {
      accessSync(path);
    } catch (error) {
      value = !(error.code === 'ENOENT');
    }
    return value;
  },
  pathJoin: (path, root = process.cwd()) => nodePath.join(root, path),
};
