# WSL 科研环境

在 Windows 上获得接近 Linux 的命令行、开发和实验环境，并与 VS Code 保持同一套工具链。

## 适合什么时候用

Windows 同学做大多数安全、密码学、AI/系统实验时，可以优先使用 **WSL2**。它让 Windows 直接获得 Linux 用户空间，并能与 VS Code 配合；对于普通 Python、C/C++、Git、Docker/命令行实验，通常比完整虚拟机更轻。

只有在需要**完整内核隔离、特殊网络拓扑、恶意样本隔离、特定操作系统镜像或低层内核实验**时，再考虑 VMware/VirtualBox 等虚拟机。

## 安装 / 入口

Windows 10 2004+ 或 Windows 11。在**管理员 PowerShell**中执行，重启后按提示初始化 Ubuntu：

```powershell
# 安装并默认启用 WSL2 + Ubuntu
wsl --install

# 查看已安装发行版及其版本
wsl --list --verbose
```

!!! tip "原则"
    不要为了"环境高级"而复杂化环境：能稳定、可重复地跑实验比环境形式更重要。

## 最小使用流程

进 Ubuntu 后，先装好常用工具链，再开始写代码：

```bash
# 更新并升级系统
sudo apt update
sudo apt upgrade

# 常用科研工具
sudo apt install git build-essential python3 python3-pip
```

接着用 **VS Code 的 Remote - WSL** 连接：

1. VS Code 安装扩展 **Remote - WSL**。
2. 命令面板 → `Remote-WSL: Connect to WSL`。
3. 打开 WSL 里的项目文件夹，之后所有终端、文件、扩展都跑在 Linux 里。

!!! info "为什么这样接"
    把项目放在 WSL 的 Linux 文件系统里，"代码环境"和"实验环境"就统一了，
    避免 Windows 与 Linux 路径、依赖、版本各搞一套。详见 [VS Code + LaTeX](vscode-latex.md)。

## 安装完成检查

- [ ] `wsl --install` 完成并已重启
- [ ] `wsl --list --verbose` 能看到一个 `WSL2` 状态的发行版
- [ ] 能 `git clone` 一个仓库并成功 `push`
- [ ] `python3 --version` 与 `gcc --version` 都可用
- [ ] VS Code 能通过 Remote - WSL 打开 WSL 里的项目

## 环境选型速查

| 环境 | 适合场景 | 什么时候不适合 |
| --- | --- | --- |
| WSL2 | Python、密码学库、普通系统/AI 实验、编译、Git | 需要完整隔离、特殊内核/网络时 |
| 原生 Linux/macOS | 长期科研开发、服务器一致环境 | Windows 用户迁移成本可能较高 |
| Docker | 固定依赖、可复现实验、服务部署 | 初学者不应在没理解依赖前盲目容器化 |
| 虚拟机 | 恶意样本隔离、完整 OS、特殊网络/内核实验 | 普通 Python/密码学实验通常过重 |

## 常见问题与安全边界

!!! warning "特别注意"
    安全实验尤其要注意隔离边界：如果实验涉及**不可信二进制、恶意样本、攻击代码**或需要改变系统安全设置，不要因为 WSL 方便就默认在宿主环境运行。

先判断风险，再选择虚拟机、沙箱或专门实验机。

## 官方资源

- Microsoft WSL 官方安装文档：[Microsoft WSL 官方安装文档](https://learn.microsoft.com/windows/wsl/install)

## 相关

- [VS Code + LaTeX](vscode-latex.md)

> 最后更新：2026-09 · 适用：Windows 11 / WSL2 / Ubuntu

[返回导航](../resources/index.md)
