# VS Code + LaTeX

## 本地方案

当项目变大，或者需要 Git、Codex/AI、Python 作图脚本和论文文件在同一个工程中协同时，本地 VS Code 更方便。

## 推荐安装顺序

1. 安装 VS Code。
2. 安装 LaTeX 发行版：
   - Windows/WSL/Linux：TeX Live
   - macOS：MacTeX / TeX Live
3. VS Code 安装 **LaTeX Workshop** 扩展。
4. 在终端确认 `latexmk`、`pdflatex`/`xelatex` 等命令可用。
5. 打开 `.tex` 文件，使用 LaTeX Workshop 编译并在 VS Code 中预览 PDF；学会 SyncTeX 正反向跳转。

## WSL + VS Code + LaTeX 的推荐组合

Windows 同学如果后续实验主要在 Linux 下完成，可以把项目直接放在 WSL 的 Linux 文件系统中，用 VS Code 连接 WSL，同时在 WSL 内安装 Git、Python、编译器和 TeX Live。这样**"代码环境"和"论文环境"都在同一套 Linux 工具链里**。

!!! note "原则"
    环境统一优先于"看起来专业"。如果 Overleaf 已经稳定满足协作需求，没有必要为了本地化而折腾数天。

## 安装完成检查

- [ ] 终端里 `latexmk`、`xelatex`/`pdflatex` 命令都能跑
- [ ] 打开一个 `.tex`，用 LaTeX Workshop **编译出 PDF**
- [ ] 能 **SyncTeX 正反向跳转**（改正文→PDF，点 PDF→正文）
- [ ] 能 `cite` 一条 BibTeX 文献并成功生成参考文献
- [ ] WSL 用户：VS Code 能 **Connect to WSL** 并编译 WSL 里的项目

## 官方入口

- VS Code：[VS Code](https://code.visualstudio.com/)
- VS Code 入门文档：[VS Code 入门文档](https://code.visualstudio.com/docs/getstarted/overview)
- LaTeX Workshop（VS Code Marketplace）：[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
- TeX Live：[TeX Live](https://www.tug.org/texlive/)
- MacTeX：[MacTeX](https://www.tug.org/mactex/)

## 相关

- [Overleaf](overleaf.md)
- [WSL 科研环境](wsl.md)

> 最后更新：2026-09 · 适用：LaTeX Workshop 最新稳定版

[返回导航](../resources/index.md)