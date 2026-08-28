# dsh-appearance

DeepSeek Harness 外观与布局插件：预设主题切换、侧边栏偏移、背景图、表格优化、层级抬升。

```sh
dsh plugin --profile web add dsh-appearance
```

重启 `dsh web` 后在 **Settings → Appearance** 中配置。

![设置面板](assets/screenshot.png)

---

## 功能

### 预设主题

内置 5 套预设，一键切换，热生效无需重启：

| ID | 名称 | 风格 |
|----|------|------|
| `default` | 原生 | 不覆盖 token，保持主包默认 |
| `minimal` | 极简黑白 | Zinc 色系，去品牌色 |
| `violet` | 暗夜紫 | 紫色品牌色 |
| `forest` | 护眼绿 | 绿色品牌色 |
| `amber` | 暖棕 | 暖琥珀色 |

通过覆盖 `--dsw-*` CSS 变量实现，每个 token 提供 `{ light, dark }` 双色值。

### 侧边栏布局

- **距顶部偏移**：0–200px 滑块，整体下移侧边栏
- **文件夹图标保持**：项目行悬停时不切换为展开箭头
- **齿轮图标对齐**：设置齿轮右移 2px，与工作区列表图标列对齐

### 背景图片

上传本地图片作为会话区背景，支持遮罩透明度调节，图片压缩至长边 ≤ 1920px 后存储于 `localStorage`。

### 会话可读性

可选开启，对表格/代码/引用块做视觉增强：
- 表格圆角 + 表头色条 + 数值单元格自动居中
- 代码块描边
- 引用块左侧色条

### 层级抬升（drag strip 兼容）

窗口顶部拖动条（`#dsh-drag-strip`, `z-index:100`）会劫持重叠区域的点击。本插件作为通用兜底：

- 扫描交互元素与拖动条的几何重叠
- 标记 `-webkit-app-region: no-drag`
- 递归抬升最外层 z<200 的定位祖先到 `z-index:200`
- MutationObserver + resize + 1.5s 定时扫描三重保障

---

## 安装

```sh
dsh plugin --profile web add dsh-appearance
```

或通过 package.json 直接链接本地路径：

```json
{
  "dependencies": {
    "dsh-appearance": "link:/path/to/dsh-appearance"
  },
  "dsh": {
    "profile": {
      "bundles": ["dsh-appearance"]
    }
  }
}
```

然后运行 `pnpm install` 并重启 `dsh web`。

---

## 开发

```sh
# 构建
node build.mjs

# 产物
lib/client.js   # CJS，经 window.__ModuleLoader__.load() 包装
```

依赖以 `external` 方式排除，不打入产物：React、`@deepseek-ai/*`。

---

## 架构

```
src/
├── index.js            # Host 端：注册 settings namespace + schema
└── client/
    ├── index.jsx       # Client 端入口：编排各模块
    ├── theme.js        # 主题引擎：preset → overrideTokens
    ├── tokens.js       # 预设主题色值定义（5 套）
    ├── settings.jsx    # 设置面板 React 组件
    ├── style.js        # 面板 + 会话区 CSS 注入
    ├── raise.js        # 拖动条层级抬升器
    ├── background.js   # 背景图管理
    ├── sidebar-order.js        # 侧边栏偏移
    ├── sidebar-folder-icon.js  # 文件夹图标保持
    ├── sidebar-icon-align.js   # 齿轮图标对齐
    └── locales.js      # 中英双语文案
```

数据流：用户在设置面板操作 → `settingsScope.set()` → `scope.subscribe(refresh)` → 同步应用主题/样式/布局。持久化写入 `~/.dsh/settings.yaml` 的 `dsh-appearance` 段。

---

## 边界

- 仅使用 CSS 注入 + 官方 slots，不修改主包源码
- 不 hook / monkey-patch DSH 内部模块
- 默认配置下零注入，无副作用

## 许可

MIT
