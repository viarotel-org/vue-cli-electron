# 
vue-cli-electron更新日志

> 基于Vue CLI搭建的Electron脚手架, 封装了最佳实践的多窗口处理以及主进程和渲染进程之间通信等 ui库使用 element-plus(已配置按需导入), css 框架使用 tailwindcss(下一代css框架) 请求使用axios进行数据请求

## 2021-7-13

- 主线程background目录更新 events 增加 shortcutkey 事件处理单元
- 取消开发模式默认打开调试工具, 改为快捷键开启 `ctrl/cmd + f12`

## 2021-7-12

- 添加 axios vuex router 集成及示例完善
- 添加svg-icon配置