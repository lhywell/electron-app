# 智能辅助决策系统

基于 Electron + Vue 3 + TypeScript + Ant Design Vue 构建的桌面应用程序。

## 技术栈

- **前端框架**: Vue 3
- **UI 组件库**: Ant Design Vue 4.x
- **开发语言**: TypeScript
- **构建工具**: Vite 5.x
- **桌面框架**: Electron 28.x
- **包管理器**: Yarn

## 项目结构

```
.
├── electron/           # Electron 主进程和预加载脚本
│   ├── main.js        # Electron 主进程入口
│   └── preload.js     # 预加载脚本
├── src/               # Vue 应用源码
│   ├── config/        # 配置文件
│   ├── App.vue        # 根组件
│   ├── main.ts        # Vue 应用入口
│   └── style.css      # 全局样式
├── index.html         # HTML 模板
├── vite.config.ts     # Vite 配置
├── tsconfig.json      # TypeScript 配置
└── package.json       # 项目配置
```

## 环境要求

- Node.js >= 16.x
- Yarn >= 1.22.x

## 安装依赖

```bash
yarn install
```

## 开发调试

### Web 开发模式

```bash
yarn dev
```

访问 http://localhost:5173 查看应用

### Electron 开发模式

```bash
yarn electron:dev
```

同时启动 Vite 开发服务器和 Electron 窗口

## 构建打包

### 构建 Web 应用

```bash
yarn build
```

构建产物输出到 `dist` 目录

### 打包 Electron 应用

```bash
yarn electron:build
```

打包后的应用输出到 `release` 目录

## 环境变量

项目支持多环境配置：

- `.env` - 通用环境变量
- `.env.development` - 开发环境变量
- `.env.production` - 生产环境变量

## 许可证

ISC
