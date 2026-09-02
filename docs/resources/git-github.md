# Git/GitHub

记录代码变化、恢复关键版本并协作维护科研项目。

## 适合什么时候用

从项目建立第一天开始使用。即使只有一个人，也应让代码、配置与关键结果能够追溯；GitHub 等远端平台则用于备份和协作。

## 最小使用流程

先掌握：

> `clone`、`pull`、`add`、`commit`、`push`、`branch`、`merge`、`.gitignore`

!!! tip "commit 规范"
    每个 commit 应代表一个**能说清楚的变化**，而不是 "update"。

## 安装完成检查

照着做一遍，能全部跑通才算上手：

- [ ] 在 GitHub 注册账号，并配置好本地 `git config`（user.name / user.email）
- [ ] 能 `git clone` 一个仓库到本地
- [ ] 能改一个文件、`git add` / `git commit -m "清晰描述"` / `git push` 到远端
- [ ] 能建一个 `branch`、提交、再 `merge` 回主分支
- [ ] 仓库里有 `.gitignore`，且**没有**把密钥、token、个人路径提交进去

!!! warning "红线"
    绝不要把密钥、token、个人绝对路径提交进仓库。一旦提交进历史，要清理很麻烦。

## 科研库规范建议

科研仓库至少包含：

```
README
src
scripts
data
results
figures
requirements / environment
```

README 写清：环境、命令、输入输出、结果位置。

## 最小命令速查

```bash
# 克隆
git clone <url>

# 日常提交
git pull
git add <file>
git commit -m "描述清楚的变化"
git push

# 分支
git branch <name>
git checkout <name>      # 或 git switch
git merge <name>
```

## 官方资源

- Git：[Git](https://git-scm.com/)
- GitHub：[GitHub](https://github.com/)

## 相关

- [第20计：Git 和 GitHub 需要学到什么程度？](../ch4-shiyan/计20.md)
- [第19计：科研代码应该怎么管理？](../ch4-shiyan/计19.md)

> 最后更新：2026-09

[返回导航](../resources/index.md)
