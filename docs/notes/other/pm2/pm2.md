---
sidebar: 'auto'
---

# pm2进程守护

[官网](https://pm2.keymetrics.io/)

## 简介

pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，当然也支持性能监控，进程守护，负载均衡等功能。pm2基本是Nodejs应用程序不二的守护进程选择，事实上它并不仅仅可以启动Nodejs的程序，只要是一般的脚本的程序它同样可以胜任。

## 安装
```shell
$ npm install -g pm2
```
安装完成后可以使用  -v 参数 查看pm2的版本 检测是否安装成功
```shell
$ pm2 -v
```

## 启动服务
```shell
$ pm2 start

// 也可以在后面添加一些参数 来附加一些效果
--watch  // --watch 监听程序源文件的变化 一旦发生变化自动重启 (热启动效果)
--ignore-watch // 排除监听的目录或者文件  支持正则表达式
-n --name // 设置程序的名称
--log // 指定日志文件
--max-memory-restart [100MB] // 设置最大占用内存
--no-daemon // 非进程守护模式启动
--no-autorestart // 关闭自动重启
--time // 日志添加时间前缀
-e --error [path] // 错误日志输出路径
-i [n]  //cluster mode 模式启动n个进程实例 
-i max  //集群模式  将会检测cpu的数量并运行尽可能多的进程  自动开启负载均衡的效果
// 还有很多参数可以使用 详细可以查看官网  这些也可以通过pm2配置文件配置
```

**各项参数详解**
* id: 进程id 标识作用 用于其他命令的指向
* name: 进程标识 用于其他命令的指向
* namespace: 环境名称 
* version: 版本
* mode: 进程模式，cluster或fork。cluster有多个进程，而fork只有一个
* pid: 进程id  标识作用
* uptime: 运行时间
* ↺ : 重启次数
* status: 进程是否在线
* cpu: cpu的占用率
* mem: 内存占用大小
* user: 启动用户名 

可以启动多个这样的任务 可以通过以下命令查看所有的运行程序信息
```shell
// 查看所有使用pm2运行的程序信息
$ pm2 list
```

## pm2常用命令

### 停止进程
```shell
// 停止指定的进程
$ pm2 stop [进程名] | [进程id]
// 停止所有的进程
$ pm2 stop all
```

### 删除进程
```shell
// 删除指定的进程
$ pm2 delete [进程名] | [进程id]
// 删除所有进程
$ pm2 delete all
// 杀死pm2的守护进程 同时也会杀死所有进程
$ pm2 kill
```

### 重启进程
```shell
// 以下两个命令都可以达到重启进程的效果
$ pm2 restart [进程名] | [进程id]  // 重启效果 短时间内进程无效
$ pm2 reload [进程名] | [进程id] // 重载效果 会保持进程在线 

// 重启所有进程
$ pm2 reload all
// 重置重启数量
$ pm2 reset [进程名]
```

### 查看所有进程
```shell
// 以下三个命令都可以查看所有进程
$ pm2 list
$ pm2 ls
$ pm2 status
```

### 查看某一个进程的信息
```shell
$ pm2 show [进程名] | [进程id]
```

### 查看日志
```shell
// 查看所有的日志
$ pm2 logs
// 查看指定的进程日志
$ pm2 logs [进程名] | [进程id]
// 清空所有日志
$ pm2 flush

// 还可以附加一些参数 附加功能
--line [数字]  // 查看最后多少条日志 默认是15条
--err // 只查看错误日志
--timestamp // 时实日志附带时间前缀
```

### 监控所有的进程
```shell
// 会进入一个信息面板
$ pm2 monit
```

### 静态服务器
```shell
$ pm2 serve [静态文件夹路径] [端口]
```

### 扩展实例
```shell
// 将指定的进程扩展到n个
$ pm2 scale [服务名] [n]
```

### pm2配置文件
```shell
// 当前目录下自动生成pm2的配置文件
$ pm2 ecosystem

// 以配置文件启动
$ pm2 start ecosystem.config.js --env production
```
apps是一个数组 可以同时配置多个进程服务 还有很多的配置项 如果想要了解的更详细还请参照官网
同时日志文件还支持 yml 格式配置 小编这里就不多演示了 详情请参照官网

```js
// ecosystem.config.js 配置演示
module.exports = {
  apps : [{
    name      : 'demo',      // 应用的名称
    script    : 'app.js',   // 应用文件路径
    env: {
      PM2_SERVE_PATH: ".",    // 静态服务的路径
      PM2_SERVE_PORT: 8080,   // 静态服务器访问的端口
      NODE_ENV: 'development' // 设置开发环境运行时
    },
    env_production : {
      NODE_ENV: 'production'  // 设置生产环境运行时
    },
    instances: "max",         // 将应用程序分布在所有CPU核心上 也可以指定多少个
    watch: true,              // 热启动模式
    output: './out.log',      // 指定日志标准输出文件及位置
    error: './error.log',     // 错误输出日志文件及位置
    merge_logs: true,         // 是否可以合并日志
    log_type: "json",         // 日志类型
    log_date_format: "DD-MM-YYYY",  // 日志的日期格式
  }],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
```