---
layout: post
title: Zollty Space的建设
category: 程序员风采
tags: Blog
keywords: blog zollty
---

## Zollty Space的定义和规划 ##
Zollty Space主要用于展示和存放我的各种文章和资料，现阶段主要包括如下几部分：

1. 博文(Blog)-项目地址： http://blog.zollty.com/b
2. 说说(Tweets)-项目地址： http://blog.zollty.com/u
3. 个人公开信息（开源项目，个人微博，个人资料，技术博客等）
4. 其他专题资料（技术培训，专题项目等）

这几个部分，都用一个横向的网页导航串联起来，他们共享同一个导航，这个导航就是Zollty Space导航。

## Zollty Space的永久链接(url)设计 ##
一些重要的文章或者资料，可能会以一个url的形式分享出去，这就要求这个url在几年之后仍然可用。

所以我博客文章和一些重要资料的url，都需要固定，不管我博客服务器如何变化，但是url始终不变。

## Zollty Blog的搭建笔记 ##
### 博文永久链接设计 ###
经过深入考察和分析，决定博客url前缀为：http://blog.zollty.com/b/

即，用"b"来代表"博客系统"。其中，发布的文章，url前缀定义为：http://blog.zollty.com/b/archive

archive后面通常接（/年/月/文章英文名.html）例如：

1. [http://blog.zollty.com/b/archive/2015/04/about-the-design-of-zollty-space.html]

我想说的是，这个文章的链接，我会尽量保证它是永久有效的（n年之后仍然可以访问）。

字体：经过经验总结和研究，以及多种测试，决定网页字体设置为：

`font-family: "Helvetica Neue","Helvetica","Microsoft YaHei","WenQuanYi Micro Hei","Hiragino Sans GB",Simsun,Arial,sans-serif;`

即英文主要为Helvetica（其实"Open Sans"也不错，但是要引入谷歌的字体，天朝网络不好，故放弃），中文主要为"Microsoft YaHei"，同时对Android、iOS、Linux均有考虑和测试，最终为上面的设置。




