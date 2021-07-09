import {
  readFile,
  writeFile,
} from 'fs';

/**
 * @description Properties 文件读写工具
 * @param filePath 文件路径
 * @returns {object} get set save
 */
export default class PropertiesReader {
  constructor(filePath) {
    // 文件路径
    this.filePath = filePath;
    // 原始数据
    this.stringifyData = '';
    // 解析数据
    this.parseData = {};
  }

  init() {
    return new Promise((resolve) => {
      readFile(this.filePath, (error, data) => {
        if (error) {
          resolve({
            status: false,
            error,
          });
        }
        this.stringifyData = data;
        this.parseData = this.parse();
        resolve({
          status: true,
          data,
          parseData: this.parseData,
        });
      });
    });
  }

  get(key) {
    return this.parseData[key];
  }

  set(key, value) {
    this.parseData[key] = value;
  }

  async save(filePath = '') {
    return new Promise((resolve) => {
      const data = this.stringify();
      writeFile(filePath || this.filePath, data, (error) => resolve(!error));
    });
  }

  // 解析
  parse(data = this.stringifyData) {
    return data
      .toString()
      .split('\n')
      .reduce((obj, item) => {
        const index = item.indexOf('=');
        if (index !== -1) {
          obj[item.slice(0, index).trim()] = item.slice(index + 1).trim();
        } else if (item) {
          obj[item] = '';
        }
        return obj;
      }, {});
  }

  // 字符串化
  stringify(data = this.parseData) {
    return Object.keys(data).map((key) => {
      const value = data[key];
      return value ? `${[key]}=${value}` : key;
    }).join('\n');
  }
}
