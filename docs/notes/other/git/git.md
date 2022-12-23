---
sidebar: 'auto'
---

# git操作

## git常规命令（操作）

### 关联到远程库&提交代码
```shell
# 关联到远程库git remote add origin 你的远程库地址
git remote add origin `你的ssh`

# 查看项目地址
git remote -v

# 首先查看本地代码状态：
git status

# 提交代码至暂存区
# 1.提交全部修改：
git add .
# 2.提交某个修改：
git add Test.m

# 将代码提交至暂存区
git commit -m "这里是本次提交的注释"

# 将本地已提交的代码上传至远程仓库：
git push origin master

# 将本地已提交的代码上传同时建立远程仓库：
git push origin dev:dev
```

### 常用git操作

```shell
# 主分支：master   测试分支：test   开发分支：develop

# 直接克隆项目的默认（master）分支到本地：
git clone git@gitee.com:caigou2003/YiCatTong.git

# 指定克隆项目的某个分支到本地：
git clone -b dev git@gitee.com:caigou2003/YiCatTong.git

# 查看本地分支：
git branch
# 查看所有分支：
git branch -a
# 切换分支
git checkout dev
# 只建立新分支不切换到新分支：
git branch dev
# 建立新分支并切换到新分支：
git checkout -b dev
# 根据远程分支建立新分支：
git checkout -b dev origin/dev

# 更改分支名字
git branch -m dev newDev
# 推送本地分支到远程(如果远程没有dev分支就在远程创建dev分支)
git push origin dev
# 删除本地分支(不能删除当前所在的分支)
git branch -d dev  
# 删除远程分支
git push origin :dev

# 从远程拉取代码
git pull origin dev
# 合并代码 （将dev分支合并到当前分支）
git merge dev

```

### 工作区
```shell
# 1.放弃某个文件中的修改：
git checkout -- <file>
# 2.放弃全部本地修改：
git checkout . 
```

### 回退版本
```shell
# 加上--hard  强制回退
# 回退到上个版本：（常用）
git reset --hard HEAD^ 
# 回退到前N次提交之前：
git reset --hard HEAD~3 
# 回退至指定提交记录：（常用）
# （这里的commit_id指使用git log命令后显示的每次提交记录的id，可查看“查看提交日志”页）
git reset --hard commit_id
```

### 生成公私钥
```shell
ssh-keygen
```

### 强制推送（将本远程分支强制更新为本地代码）
```shell
git push -f origin master
```

## 提交代码备注规范

### git 提交规范，一些常用的提示

> feat：新增功能
> 
> fix：修复 bug
> 
> docs：文档变更
> 
> style：代码格式（不影响功能，例如空格、分号等格式修正）
> 
> refactor：代码重构（不包括 bug 修复、功能新增）
> 
> perf：性能优化
> 
> chore：其他修改, 比如构建流程, 依赖管理、版本好修正.

## git操作（复杂操作）

### 查询代码行数
```shell
git log  --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }'
```