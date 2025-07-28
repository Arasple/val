# val

中文 | [English](./README.md)

一个基于 Turborepo 的现代化 monorepo 模板项目。

## 技术栈

- [x] [Bun](https://bun.sh) - 快速的 JavaScript 运行时和包管理器
- [x] [Turborepo](https://turborepo.com/) - 高性能的 monorepo 构建系统
- [x] [Biome.js](https://biomejs.dev/) - 代码格式化和检查工具 (由 [Ultracite](https://www.ultracite.ai/) 提供零配置)
- [x] [Next.js](https://nextjs.org/) - React 全栈框架
- [x] [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [x] [shadcn/ui](https://ui.shadcn.com) - 可定制的 UI 组件库

## 项目结构

```
.
├── apps/
│   └── web/              # Next.js 应用
├── packages/             # 共享包
└── turbo.json           # Turborepo 配置
```

## 快速开始

### 安装依赖

```bash
bun install
```

### 开发

```bash
bun dev
```

### 构建

```bash
bun build
```

### 安装 UI 组件

```bash
cd apps/web
bunx shadcn@canary add [组件名]
```

## 脚本命令

- `bun dev` - 启动开发服务器
- `bun build` - 构建所有应用和包
- `bun lint` - 运行代码检查
- `bun format` - 格式化代码
