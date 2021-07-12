// eslint-disable-next-line no-undef
const logoPath = () => `${__static}/logos/index.png`;
module.exports = {
  appName: 'vue-electron-cli',
  logoPath,
  // 窗口选项
  windowOptions: () => ({
    icon: logoPath(),
    width: 800,
    height: 600,
    // resizable: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    },
  }),
};
