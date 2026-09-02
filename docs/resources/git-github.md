# Git/GitHub

## 研一需要学到什么程度？

先掌握：

> `clone`、`pull`、`add`、`commit`、`push`、`branch`、`merge`、`.gitignore`

!!! tip "commit 规范"
    每个 commit 应代表一个**能说清楚的变化**，而不是 "update"。

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

## 官方入口

- Git：https://git-scm.com/
- GitHub：https://github.com/

## 相关

- [第20计：Git 和 GitHub 需要学到什么程度？](../ch4-shiyan/计20.md)
- [第19计：科研代码应该怎么管理？](../ch4-shiyan/计19.md)

[返回导航](../resources/index.md)