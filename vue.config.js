const {
  appName,
} = require('./src/config/index');
const {
  isExist,
  pathJoin,
} = require('./src/utils/node');

module.exports = {
  pages: createPages('./src/windows'),
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: './src/background/index.js',
      mainProcessWatch: ['./src/background/**'],
      nodeIntegration: true,
      builderOptions: {
        npmRebuild: false,
        productName: appName,
        appId: 'com.jar.starter.box',
        win: {
          icon: 'public/logos/index.ico',
          target: 'nsis',
        },
      },
    },
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(pathJoin('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(pathJoin('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'svg-[name]',
      })
      .end();
  },
};

function createPages(dirPath) {
  const isCanDir = isExist(dirPath);
  let files = [];
  if (isCanDir) {
    const klawSync = require('klaw-sync');
    // @ts-ignore
    files = klawSync(dirPath, {
      nodir: true,
      traverseAll: true,
      filter({
        path,
      }) {
        return !!path.match(/main\.js/);
      },
    });
  }
  // console.log('files', files);
  const windowsPathLength = pathJoin(dirPath).length;
  const regExp = process.platform !== 'win32' ? /\//g : /\\/g;

  // 入口页面
  const initPage = {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: appName,
    },
  };

  const pages = files.reduce((obj, {
    path,
  }) => {
    const filename = path
      .substring(windowsPathLength + 1)
      .replace(regExp, '_')
      .replace(/_main/, '')
      .replace(/\.js$/, '.html');
    console.log('filename', filename);

    const pageName = filename.substring(0, filename.lastIndexOf('.'));
    console.log('pageName', pageName);

    obj[pageName] = {
      entry: path,
      template: './public/index.html',
      filename,
      title: appName,
    };

    return obj;
  }, initPage);

  return pages;
}
