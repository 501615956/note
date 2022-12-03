# `node`基础

## 内置成员变量
| 变量名称    | 描述                   |
| ----------- | ---------------------- |
| `__dirname` | 表示当前文件所在的目录 |

## `node`版本管理工具nvm

### 在`windows`系统使用方法

#### 安装

> 尽管 NVM 并不支持 windows，但是可以运行在 WSL（Windows Subsystem for Linux）中，WSL 是一个可以运行在 Windows10上的一个 Linux子系统，WSL 安装包的地址：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

点击 nvm-setup.zip 即可下载安装<br/>
<img src="https://cdn.nlark.com/yuque/0/2022/png/28469598/1669162809821-d3ffce95-3299-42f9-9b9b-0ec1f4cc83b3.png#averageHue=%23fdfcfc&clientId=ude65daf4-22a5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=195&id=u6ab5bb7e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=268&originWidth=888&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65320&status=done&style=none&taskId=ufb5677bf-6fc4-4c30-9599-19865137729&title=&width=645.8181818181819"  referrerpolicy='no-referrer'/>

#### 使用

```powershell
# 安装指定node版本
nvm install v14.15.0
# 运行指定node版本
nvm use v14.15.0
# 切换到最新的node版本
nvm use node
# 给不同的版本号设置别名
nvm alias node_cms 14.15.0
# 使用该别名
nvm use node_cms
# 查看已安装node列表
nvm ls 或 nvm list

# 用于卸载某个node版本
nvm uninstall (version)

# 用于展示当前在windows系统运行的nvm版本
nvm version 或 nvm -v
```