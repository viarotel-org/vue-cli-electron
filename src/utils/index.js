import {
  random as _random,
} from 'lodash-es';
/**
 * @desc 使用async await 进项进行延时操作
 * @param {*} time
 */
export const delay = (time = 1000) => new Promise((resolve) => setTimeout(() => resolve(true), time));

/**
 * @desc 返回占位图
 * @param w 宽
 * @param h 高
 * @returns {string} 链接地址
 */
export function tempImage(width, height) {
  if (!width) {
    width = _random(50, 1000);
    height = _random(50, 1000);
  }

  // let url = `http://placekitten.com/${width}/`;
  // let url = `https://dummyimage.com/${width}x`;
  let url = `http://lorempixel.com/${width}/`;
  if (height) {
    url += height;
  } else {
    url += width;
  }

  return url;
}
