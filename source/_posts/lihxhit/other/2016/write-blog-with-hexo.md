---
title: hexo博客搭建(一)
date: 2016/8/18
categories: 
- blog
tags:
- hexo
- next
- blog
author: shaonan
---
{% raw %}
<blockquote class="warn">
<p>本文主要面向公司内部博客相关人员。若想学习hexo基础相关请参考<a href="https://hexo.io/zh-cn/docs/" target="_blank"> hexo中文文档 </a></p>
</blockquote>
{% endraw %}

## 概览
本博客是在[NoxFed Blog](https://github.com/NoxFED/Blog)的基础上进行的讲解，在阅读本篇博客之前请先fork https://github.com/NoxFED/Blog.git 后进行修改。
## 项目说明
本项目是在 [hexo](https://hexo.io/) 3.2版本的基础上开发的，生成的静态资源托管在 [Github Pages](https://pages.github.com/)上。Blog地址 : https://noxfed.github.io/ 
<!-- more-->
项目结构如下：
``` plain
Blog(root)
├── scaffolds(脚手架,新建页面的模板)
├── source
|   ├── _posts(博客文章目录)
|   ├── categories
|   |   └── index.md(分类页面)
|   ├── message
|   |   └── index.md(留言板页面)
|   ├── tags
|   |   └── index.md(标签页面)
|   └── favicon.ico(网站的shortcut icon)
├── themes
|   └── next(next主题)
|       ├── languages/*.yml(多语言配置)
|       ├── layout/**/*.yml(页面模板)
|       ├── source(资源文件目录,js,css,图片等)
|       └── _config.yml(主题配置文件)
├── gulpfile.js(项目构建)
├── package.json(项目依赖)
└── _config.yml(hexo配置文件)

```

## 搭建步骤
clone项目到本地
### 基础环境需求
在搭建blog开发环境之前，请确保电脑中已安装列表中的所有项目。
- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [gulp](http://www.gulpjs.com.cn/)
- [Git](https://git-scm.com/)

### 搭建blog开发环境
在确保基础环境满足后, 即可使用npm安装 hexo-cli ( hexo的命令行接口 )。
{% raw %}
<blockquote class="info">
<p><strong>Tips</strong> : 由于hexo-cli的大多数常用命令不适合现在的博客开发流程, 所以可以选择不安装</p>
</blockquote>
{% endraw %}
``` bash
$ npm install -g hexo-cli
``` 
在Blog根目录下运行命令，安装项目依赖:
``` bash
$ npm install
``` 
在项目依赖安装完成后，运行命令:
``` bash
$ npm run server
``` 
该命令默认在3001,4000,8088端口开启服务，请确保端口不被占用，如果需要自定义端口号则需要修改项目根目录下的**gulpfile.js**。
命令执行后如果浏览器自动打开并显示博客页面则代表博客搭建成功。