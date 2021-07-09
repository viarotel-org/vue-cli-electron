export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
/**
 * @desc 使用async await 进项进行延时操作
 * @param {*} time
 */
export const delay = (time = 1000) => new Promise((resolve) => setTimeout(() => resolve(true), time));
/**
 * @desc JavaScript源代码路径.
 */
export const resourcesPath = isProduction ? `${process.resourcesPath}` : '.';

/**
 * @description 判断文件或文件是否存在
 * @param {*} path 路径
 * @returns {boolean}
 */
export function isExist(path) {
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
}
