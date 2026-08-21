# dsh-appearance 插件整理

> 版本 0.1.0 | 路径 `packages/extension/dsh-appearance/`

## 一句话概括

DeepSeek Harness 桌面版的外观与布局插件，通过 CSS 注入 + 官方插槽扩展，不改主包源码，提供预设主题切换、侧边栏偏移、拖动条层级抬升三大能力。

---

## 架构概览

```
src/
├── index.js              # Host 端入口：注册设置命名空间 + schema
└── client/
    ├── index.jsx          # Client 端入口：编排所有模块
    ├── theme.js           # 主题引擎：preset → overrideTokens
    ├── tokens.js          # 预设主题色值定义（5 套主题）
    ├── settings.jsx       # 设置面板 React 组件
    ├── style.js           # 面板 CSS 注入
    ├── raise.js           # 拖动条层级抬升器（通用兜底）
    ├── sidebar-order.js   # 侧边栏偏移 CSS 注入
    └── locales.js         # 中英双语文案

build.mjs                  # esbuild 打包 → lib/client.js
cordis.patch.yml           # 插件注册到 desktop profile
```

---

## 功能模块

### 1. 预设主题切换

| 主题 | 中文名 | 风格 |
|------|--------|------|
| `default` | 原生 | 不覆盖任何 token，保持主包默认 |
| `minimal` | 极简黑白 | Zinc 色系，去品牌色 |
| `violet` | 暗夜紫 | 紫色品牌色 |
| `forest` | 护眼绿 | 绿色品牌色 |
| `amber` | 暖棕 | 暖琥珀色 |

**实现方式：** 通过 `ctx.theme.overrideTokens(source, tokens)` 覆盖 `--dsw-*` CSS 变量，每个 token 提供 `{ light, dark }` 双色值。设置变更时重新 apply，相同 source id 自动替换上次覆盖。

**覆盖的 token 层级：**
- 背景层：`bg-base` / `bg-layer-1` / `bg-layer-2` / `bg-overlay` / `bg-module-platform` / `sidebar-fill`
- 文字层：`label-primary` / `secondary` / `tertiary` / `primary-dimmed`
- 品牌色：`brand-primary` / `brand-text`
- 边框：`border-l1` / `border-l2`
- 状态色：`error` / `success` / `warn` / `business`
- 交互：`interactive-bg-hover` / `interactive-bg-active`
- 按钮：`button-primary-fill` / `button-primary-hover`

### 2. 侧边栏偏移

通过纯 CSS 注入 `margin-top` + `height: calc()` 让左侧边栏整体下移 N 像素（0–200px 滑块控制），底部仍贴齐视口底。

- 目标元素：`.hHd-Xa_root`
- 偏移为 0 时不注入任何 CSS（保持原生）
- 配置项：`sidebarOffset`（number, px）

### 3. 拖动条层级抬升

窗口顶部 `#dsh-drag-strip`（z-index:100, app-region:drag）会劫持重叠区域的点击。此模块作为通用兜底：

- 扫描所有交互元素（button/a/input/textarea/select/[role=button] 等）
- 检测与 drag strip 的几何重叠
- 标记 `-webkit-app-region: no-drag`
- 递归抬升最外层 z<200 的定位祖先到 z-index:200
- 三重保障：MutationObserver + resize 监听 + 1.5s 定时扫描
- 幂等：与主进程内置版本叠加无害

**额外 CSS 规则：**
- `[class*="tabBar"]` → z-index:200（面板 tab 栏越过 strip）
- `[class*="sessionLogButton"]` → z-index:200（导出按钮）
- `[class*="settings"]` → z-index:9999（设置弹窗始终最顶）
- `.shlrail_fixed` → z-index:201 / `.shlrail_tooltip` → z-index:202（历史滑轨）

---

## 数据流

```
用户在设置面板操作
    ↓
settingsScope.set(field, value)     ← client 端写入
    ↓
scope.subscribe(refresh)           ← 监听变更
    ↓
refresh()
    ├── themeEngine.apply()         → ctx.theme.overrideTokens()
    └── applySidebarOffset(cfg)     → CSS <style> 注入/移除
```

**持久化链路：** client 端 settingsScope → host 端 `dsh-appearance` namespace → schema 校验 → `~/.dsh/settings.yaml` 的 `dsh-appearance` 段。

---

## Host 端 Schema

```js
{
  themePreset: string (default: 'default'),
  customTokens: {
    [tokenName]: {
      light: string,
      dark: string,
      lightAlpha: number (default: 100),
      darkAlpha: number (default: 100)
    }
  } (default: {})
}
```

> 注：`customTokens` schema 已注册但目前未在 UI 中暴露使用。

---

## 构建与部署

| 步骤 | 命令 |
|------|------|
| 构建 | `node build.mjs`（esbuild → CJS → `window.__ModuleLoader__.load()` 包装） |
| 产物 | `lib/client.js` |
| 接入 | 符号链接 `profiles/desktop/node_modules/dsh-appearance` → 构建即生效 |
| 生效 | 重启 App 加载 |

**构建特点：**
- 入口 `src/client/index.jsx`，打包为 CJS
- React / `@deepseek-ai/*` 作为 external 不打包
- 产物用 `window.__ModuleLoader__.load({ id, factory })` 包裹

---

## 依赖

| 类型 | 包 | 用途 |
|------|-----|------|
| peer | `@deepseek-ai/cordis` | 插件框架 |
| peer | `@deepseek-ai/dsh-client-runtime` | 运行时 |
| peer | `@deepseek-ai/dsh-client-ui-layout` | 布局 |
| peer | `@deepseek-ai/dsh-client-ui-primitives` | UI 基础组件 |
| peer | `@deepseek-ai/dsh-client-ui-settings` | 设置系统 |
| peer | `@deepseek-ai/dsh-client-ui-theme` | 主题系统 |
| peer | `@deepseek-ai/dsh-settings` | 设置命名空间 |
| peer | `@deepseek-ai/schemastery` | Schema 定义 |
| dev | `esbuild` | 打包工具 |

---

## 设置面板入口

通过官方插槽 `settings.general.item` 注入，order: 11，位于通用设置区。

---

## 边界遵守

- ✅ 仅 CSS 注入 + 官方插槽
- ✅ 不修改 `apps/desktop/**`
- ✅ 不 hook / monkey-patch 主包
- ✅ 不干扰其他插件（如 dsh-better-sidebar）
- ✅ 默认配置下零注入（无副作用）
