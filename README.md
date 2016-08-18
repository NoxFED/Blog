#BLOG
fork本仓库并clone到本地
##安装hexo命令行包
``` bash
$ npm install -g hexo-cli
```
##启动hexo本地node服务器
``` bash
$ hexo s 或 hexo server
```

hexo服务器启动后通过[http://localhost:4000](http://localhost:4000)访问blog
在本地服务器确认写完blog后, 生成静态文件:
``` bash
$ hexo g
```
此命令会在Blog根目录下的build文件夹(文件夹名称由_config文件配置, 无需修改)中生成静态资源文件。

静态文件无需提交(已添加到ignore中)

提交对源代码的修改即可, 静态资源统一生成管理
