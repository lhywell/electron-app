const { contextBridge } = require('electron')

// 暴露安全的 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 在这里添加需要暴露给前端的 API
  platform: process.platform
})
