# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供在此仓库中工作的指导说明。

## 项目概述

这是一个基于 **VuePress v1.9.5** 和 **vuepress-theme-vdoing** 主题构建的个人知识库和博客（"Yan's Blog" / 闲碎记事本）。它既是技术文档站点，也是用于整理学习资料、笔记和文章的博客。

网站通过 GitHub Actions CI/CD 自动部署到 GitHub Pages。

## 开发命令

```bash
# 启动开发服务器（需要 Node.js legacy OpenSSL 以兼容旧版本）
npm run dev

# 构建生产版本（输出到 docs/.vuepress/dist/）
npm run build

# 部署到配置的服务器（运行 deploy.sh）
npm run deploy

# 批量编辑 frontmatter（使用 utils/editFrontmatter.js 和 utils/config.yml）
npm run editFm
```

**注意：** 开发服务器需要 Node.js 的 legacy OpenSSL provider。如果 `npm run dev` 失败，请设置：
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## 架构说明

### 内容结构

`docs/` 目录包含所有内容和配置：

- **`docs/.vuepress/`** - VuePress 配置目录
  - `config.js` - VuePress 主配置文件
  - `config/` - 模块化配置（导航、主题设置、插件、头部标签、HTML 模块）
  - `public/` - 静态资源（图片、图标、特性图）
  - `styles/` - 自定义样式（index.styl, palette.styl）
  - `enhanceApp.js` - Vue 应用增强

- **`docs/00.目录页/`** - 目录/分类页面
- **`docs/01.知识库/`** - 技术知识库（Java、Linux、Docker、Redis、Nginx、MySQL 等）
- **`docs/02.学习/`** - 学习资料（Python、Vue 等）
- **`docs/03.收录/`** - 收藏整理的内容
- **`docs/04.Cloudflare合集/`** - Cloudflare 相关内容
- **`docs/_posts/随笔/`** - 随笔博客文章
- **`docs/@pages/`** - 特殊自动生成页面（归档、分类、标签）
- **`docs/09.关于/`** - 关于页面
- **`docs/10.友链/`** - 友情链接

### 关键配置文件

- **[`docs/.vuepress/config.js`](docs/.vuepress/config.js)** - 主配置文件，包含主题设置和侧边栏
- **[`docs/.vuepress/config/themeConfig.js`](docs/.vuepress/config/themeConfig.js)** - 主题设置（作者信息、导航、页脚、背景图）
- **[`docs/.vuepress/config/nav.js`](docs/.vuepress/config/nav.js)** - 站点导航菜单结构
- **[`docs/.vuepress/config/plugins.js`](docs/.vuepress/config/plugins.js)** - 插件配置（评论、搜索、sitemap 等）

### 侧边栏导航

主题使用 `sidebarMode: 'structuring'` 模式，**根据目录层级自动生成侧边栏结构**。内容组织方式：
- 使用数字前缀（01.、02. 等）对目录进行排序
- 目录深度决定嵌套层级
- 使用中文目录名称进行内容分类

### Frontmatter 规范

大部分内容文件使用以下 frontmatter 模式：

```yaml
---
title: 文章标题
date: YYYY-MM-DD HH:mm:ss
permalink: /pages/xxxxxx/
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
  - 标签2
author:
  name: Yan
  link: https://github.com/chansanya
sidebar: auto  # 用于博客文章
---
```

**知识库文章**通常使用结构化侧边栏导航（不需要 `sidebar: auto`）。
**博客文章**（`_posts/` 中）使用 `sidebar: auto` 自动生成。

### 自定义 Markdown 功能

主题扩展了以下 Markdown 功能：

- **自定义容器：** `::: tip`、`::: warning`、`::: danger`、`::: note`、`::: center`、`::: right`、`::: details`
- **徽章组件：** `<Badge text="文本" type="tip|warning|error" vertical="top|middle"/>`
- **文本高亮：** `<mark>文本</mark>`
- **卡片列表：** 用于展示链接集合
- **图片卡片列表：** 带元数据的视觉图库
- **代码块**带一键复制按钮
- **图片缩放**功能

详细的 markdown 语法示例请参考 [README.md](README.md)。

### 工具脚本

- **[`utils/editFrontmatter.js`](utils/editFrontmatter.js)** - 批量 frontmatter 编辑器（由 `utils/config.yml` 配置）
- **[`deploy.sh`](deploy.sh)** - 部署脚本，将构建输出移动到 Nginx 服务器
- **[`run.sh`](run.sh) / [`run.bat`](run.bat)** - 开发启动脚本，包含 OpenSSL legacy provider 设置

### CI/CD

GitHub Actions 工作流（[`.github/workflows/CI.yaml`](.github/workflows/CI.yaml)）在推送到 `master` 分支时自动构建和部署。

## 内容编写指南

- 使用数字目录前缀（01.、02. 等）进行排序
- 将技术文档放在 `01.知识库/` 中并正确分类
- 随笔类文章放在 `_posts/随笔/`
- 确保所有文章都有正确的 frontmatter，包含标题、日期和分类
- 博客文章使用 `permalink` 以保持 URL 稳定
