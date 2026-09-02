# WSL 科研环境

## 为什么推荐 WSL？

Windows 同学做大多数安全、密码学、AI/系统实验时，可以优先使用 **WSL2**。它让 Windows 直接获得 Linux 用户空间，并能与 VS Code 配合；对于普通 Python、C/C++、Git、Docker/命令行实验，通常比完整虚拟机更轻。

只有在需要**完整内核隔离、特殊网络拓扑、恶意样本隔离、特定操作系统镜像或低层内核实验**时，再考虑 VMware/VirtualBox 等虚拟机。

## 最小安装

Windows 10 2004+ 或 Windows 11：

```powershell
wsl --install
```

在管理员 PowerShell 中执行，重启后按提示初始化 Ubuntu。

!!! tip "原则"
    不要为了"环境高级"而复杂化环境：能稳定、可重复地跑实验比环境形式更重要。

## 环境选型速查

| 环境 | 适合场景 | 什么时候不适合 |
| --- | --- | --- |
| WSL2 | Python、密码学库、普通系统/AI 实验、编译、Git | 需要完整隔离、特殊内核/网络时 |
| 原生 Linux/macOS | 长期科研开发、服务器一致环境 | Windows 用户迁移成本可能较高 |
| Docker | 固定依赖、可复现实验、服务部署 | 初学者不应在没理解依赖前盲目容器化 |
| 虚拟机 | 恶意样本隔离、完整 OS、特殊网络/内核实验 | 普通 Python/密码学实验通常过重 |

## 安全隔离红线

!!! danger "特别注意"
    安全实验尤其要注意隔离边界：如果实验涉及**不可信二进制、恶意样本、攻击代码**或需要改变系统安全设置，不要因为 WSL 方便就默认在宿主环境运行。

先判断风险，再选择虚拟机、沙箱或专门实验机。

## 官方入口

- Microsoft WSL 官方安装文档：https://learn.microsoft.com/windows/wsl/install

## 相关

- [VS Code + LaTeX](vscode-latex.md)

[返回导航](../resources/index.md)