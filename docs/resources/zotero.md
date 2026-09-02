# Zotero 安装和使用

目标不是"会用所有 Zotero 功能"，而是在 **20 分钟内**形成论文进入、整理、阅读、引用的闭环。

!!! abstract "一句话"
    安装完成 ≠ 会用。按下面的 **checklist** 逐项打勾，才算真的能上手。

## 安装

1. 进入 Zotero 官方下载页，安装桌面客户端。
2. 同时安装浏览器 **Zotero Connector**。Chrome/Firefox/Edge 可直接安装；Safari Connector 随 Zotero 提供，可在 Safari 扩展设置中启用。
3. 注册 Zotero 账号并登录，用于同步文献元数据和组库。PDF 同步空间有限，可根据自己的需求决定附件同步方式。
4. 打开一篇 IEEE/ACM/arXiv/期刊网页，点击浏览器 Connector，确认论文条目、作者、年份、DOI 和 PDF 能正确进入 Zotero。

## 安装完成检查

照着逐项打勾，全部通过才算装完：

- [ ] Zotero Desktop 已打开，能登录并同步
- [ ] 浏览器右上角能看到 **Zotero Connector** 图标
- [ ] 能把一篇 **IEEE 论文一键保存**进 Zotero
- [ ] 附件 **PDF 自动下载**成功
- [ ] 条目里 **作者、年份、venue** 正确（与出版社官方页核对）
- [ ] 已新建自己的第一个 **Collection**（如 `Research/ToRead`）
- [ ] LaTeX 用户：能导出 **BibTeX** 并成功 `cite` 一条引用

> 配图（可选）：在浏览器中点击 Connector 的"点击这里保存论文"截图，贴在组内 Wiki 或本页。

!!! tip "卡住怎么办"
    多数"装不上"是 Connector 没装、或没登录账号。先确认这两点，再看官方 Quick Start。

## 建议的 Collection 结构

不要按"IEEE / ACM / Elsevier"分类。建议按**研究问题**分类，例如：

```
Research
├── Agent-Security
│   ├── Core
│   ├── ToRead
│   └── Related
├── Cryptography
│   ├── ABE
│   └── ZKP
└── Projects
    └── Paper-01
```

标签控制在少量稳定集合：`Core`、`ToRead`、`Read`、`Reproduce`、`Cite`。

!!! tip "Collection vs Tag"
    **Collection** 表示"属于哪个问题"，**Tag** 表示"当前是什么状态/有什么属性"。

## 从 Zotero 到论文写作

- **Word 用户**：直接使用 Zotero 自带的 Word 插件插入引用
- **LaTeX 用户**：从 Zotero 导出 BibTeX/BibLaTeX

插件不是越多越好，先用官方功能建立稳定流程，再根据需要添加可信插件。

## 底线

!!! danger "投稿前"
    文献管理器里的元数据也会错。真正投稿前，作者、题目、venue、年份、页码、DOI 应与**出版社/会议官方页面**核对。

## 官方入口

- Zotero 下载：[Zotero 下载](https://www.zotero.org/downloads)
- Zotero 官方安装说明：[Zotero 官方安装说明](https://www.zotero.org/support/installation)
- Zotero Quick Start Guide：[Zotero Quick Start Guide](https://www.zotero.org/support/quick_start_guide)
- Zotero Word Processor Integration：[Zotero Word Processor Integration](https://www.zotero.org/support/word_processor_plugin_installation)
- Zotero 生成参考文献：[Zotero 生成参考文献](https://www.zotero.org/support/creating_bibliographies)

## 相关

- [第13计：文献应该怎么管理？](../ch3-gongju/计13.md)

> 最后更新：2026-09 · 适用版本：Zotero 7.x / 8.x

[返回导航](../resources/index.md)