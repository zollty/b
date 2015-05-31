---
layout: post
title: Zollty Space（个人网络空间）的建设
category: 程序员风采
tags: Blog
keywords: zollty blog
---

## 一、个人网络空间的意义和规划 ##

1. 对外宣传某些思想的窗口。（最本质的意义）
2. 展示自我的能力。（在人际圈或者面试的时候）
3. 存放一些固定的、较永久的资料，对外提供浏览或下载。
4. 存放一些临时的小资料（大资料需要用网盘去分享）。

#### 因此，个人网络空间的规划如下：

1. 要对外宣传和展示，就要引入大的流量和人气。*可以借助CSDN、CNBLOG、OSChina吸引流量到个人网站来（在个人博客上发一篇文章时，同时转载到CSDN/CNBLOG/OSC上）。*
2. 个人博客上，文章不宜多，但是质量要好。包括文章的内容和外在，都要比较贴心和令人赏心悦目。
3. 对于一些短文说说，看能不能整理一下，定期放到一个突出的位置，供大家浏览和评论。

#### 站点规划如下：

1. 主站点为：[blog.zollty.com](http://blog.zollty.com)
2. 中长篇博文网站地址{**/b**}：[blog.zollty.com/b](http://blog.zollty.com/b)
3. 短文说说、随笔地址{**/n**}：[blog.zollty.com/n](http://blog.zollty.com/n)


## 二、技术要求

**只关注内容**（主要包括文本、图片、声音、视频），其实样式也是内容的一部分，不过大多数情况下，只要内容不丢失，样式都是可以重新设计的。

所以要求如下：
	
1. 可以根据纯内容生成HTML静态页面，而且易于更新重新生成HTML。
2. 易于编辑，样式调整方便，所见即所得。
3. 各种文本内容、图片、声音、视频等易于管理。
4. 样式能够保留。

现行技术方案：

1. 支持发表Markdown语法编写的文章。
2. 博客支持直接引入HTML页面。


## 三、Zollty Space的定义、规划和设计

### 3.1 定义和规划

Zollty Space是多个项目的集合，主要用于展示和存放我的各种文章和资料，现阶段主要包括如下几部分：

1. 博文(Blog)-项目地址： http://blog.zollty.com/b
2. 说说(Tweets)-项目地址： http://blog.zollty.com/n
3. 个人公开信息（开源项目，个人微博，个人资料，技术博客等）
4. 其他专题资料（技术培训，专题项目等）

这几个部分，集中用一个横向的网页导航串联起来，共享同一个Zollty Space导航。

### 3.2 Zollty Space的永久链接(url)设计 ##

一些重要的文章或者资料，可能会以一个url的形式分享出去，这就要求**这个url在几年之后仍然可用**。

所以我博客文章和一些重要资料的url，都需要固定，**不管我博客服务器如何变化，但是url始终不变**。


### 3.3 Zollty Blog设计

#### 3.3.1 博文永久链接设计
经过深入考察和分析，决定博客url前缀为：http://blog.zollty.com/b/

即，用"b"来代表"博客系统"。其中，发布的文章，url前缀定义为：http://blog.zollty.com/b/archive

archive后面通常接（/年/月/文章英文名.html）例如：

   [http://blog.zollty.com/b/archive/2015/04/about-the-design-of-zollty-space.html](http://blog.zollty.com/b/archive/2015/04/about-the-design-of-zollty-space.html)

我想说的是，这个文章的链接，我会尽量保证它是永久有效的（n年之后仍然可以访问）。

#### 3.3.2 博客目录
一级目录初步如下：

* 归档
* 分类
* 标签
* 资源？
* 关于

#### 3.3.3 字体
经过经验总结和研究，以及多种测试，决定网页字体设置为：

`font-family: "Helvetica Neue","Helvetica","Microsoft YaHei","WenQuanYi Micro Hei","Hiragino Sans GB",Simsun,Arial,sans-serif;`

即英文主要为Helvetica（其实"Open Sans"也不错，但是要引入谷歌的字体，天朝网络不好，故放弃），中文主要为"Microsoft YaHei"，同时对Android、iOS、Linux均有考虑和测试，最终为上面的设置。


## 四、静态资源文件存放规划

### 4.1 参考
GITHUB：

https://assets-cdn.github.com/assets/github-099e0ecc2851c8aca89ef6dafa191df3b0f2a2c8ad34e134c5473ca1ba0a59b2.css
https://assets-cdn.github.com/assets/spinners/octocat-spinner-128-338974454bb5c32803e82f601beb051d373744b024fe8742a76009700fd7e033.gif

京东：

http://misc.360buyimg.com/wz/wlwhjyxkz.jpg
http://misc.360buyimg.com/jdf/1.0.0/unit/wl/1.0.0/wl.js
http://misc.360buyimg.com/lib/js/2013/DD_belatedPNG.js
http://misc.360buyimg.com/lib/js/e/jquery-1.2.6.pack.js
http://misc.360buyimg.com/product/js/2013/home.js
http://img11.360buyimg.com/da/jfs/xxxd.png
http://img13.360buyimg.com/da/20120221/112_40_WvArIl.png

其他：

http://s1.bdstatic.com/r/www/cache/static/home/img/sugbg_d24a0811.gif
http://t10.baidu.com/it/

http://img01.taobaocdn.com
http://g.tbcdn.cn/tpi/topbar/1.1.42/global-min.css
http://g.tbcdn.cn/trip/trip-home/0.4.10
http://gtms03.alicdn.com/tps/i3/TB0.png

http://g.tbcdn.cn
http://g.alicdn.com
http://img.alicdn.com

http://qzonestyle.gtimg.cn/qzone/v8/index/touch-icon-ipad-retina.png
http://cn.qzonestyle.gtimg.cn/aoi/skin/35.css?max_age=19830212&d=20141030172230
http://cn.qzonestyle.gtimg.cn/aoi/img/logo/favicon.ico?max_age=31536000
http://i.gtimg.cn/open/app_icon/00/02/75/50/27550_16.png
https://a.alipayobjects.com/homeindex/1.0.1/homeindex.css
https://i.alipayobjects.com/common/favicon/favicon.ico
https://i.alipayobjects.com/i/ecmng/swf/201502/02.05flash.swf
https://a.alipayobjects.com/ar/??alipay.smartracker-1.1.js
https://a.alipayobjects.com/??seajs/seajs/2.2.3/sea.js

http://s.doubanio.com/f/shire/5d546bd6e07d202f3cc0083a2e77880fb77f57a9/css/douban.css
http://s.doubanio.com/f/shire/e49e2/pics/new_menu.gif
http://s.doubanio.com/misc/mixed_static/66cf6da32f8bc656.css

http://t.douban.com/img/files/file-1426478788.png

http://img.t.sinajs.cn/t6/style/css/module/base/frame.css
http://js.t.sinajs.cn/t6/home/js/pl/top/topInit.js

### 4.2 我的规划
采用【CDN】：http://assets.zollty.com 域名
例如：

http://assets.zollty.com/my/
http://assets.zollty.com/lib/
http://assets.zollty.com/course/
http://assets.zollty.com/temp/
http://assets.zollty.com/misc/

目前还无法映射成除了github之外的其他域名，所以，重要的静态资源也统一在 github 上面托管。
当然了，也可以跳转到 七牛云存储
比如 
http://assets.zollty.com/course/travesky/learn-spring
跳转到
http://ires.qiniudn.com/course/travesky/learn-spring

### 4.3 现行方案
博客私有图片和资料：

http://ires.qiniudn.com/my/img/

http://ires.qiniudn.com/my/misc/

公用JS等程序库文件：
http://ires.qiniudn.com/lib/js/


其他专题，例如：

http://ires.qiniudn.com/course/

http://ires.qiniudn.com/temp/

http://ires.qiniudn.com/misc/









