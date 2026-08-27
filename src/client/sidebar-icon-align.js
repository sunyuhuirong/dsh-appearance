/**
 * 侧边栏图标列对齐：把设置齿轮右移 2px，对齐工作区列表文件夹/会话图标列
 * （中心 28px）。Logo 保持原生位置（实测 +2px 会偏右，已按用户反馈撤回）。
 *
 * 内核现状（dsh-client-ui-sidebar / dsh-client-ui-settings-general）：
 *   .trigger { margin: 4px -2px; padding: 0 10px 0 8px }   → 齿轮中心 26px
 *   .projectRow/.sessionRow { padding: 0 8px }             → 图标列中心 28px
 *
 * 覆盖策略（!important 压过内核非重要声明，与注入顺序无关）：
 *   齿轮：margin-left -2 → 0（精确 +2px），悬停背景左缘同时回到与行背景
 *   相同的 12px 起点。collapsed 模式下 rail 的 margin 本就是 0，无副作用。
 *
 * 配置：alignSidebarIcons（默认开启；关闭时移除注入，恢复原生）。
 */

const CSS_ID = 'dsh-appearance/sidebar-icon-align.css';

const ICON_ALIGN_CSS = `
[class*="_settingsArea"] [class*="_trigger"] { margin-left: 0 !important; }
`;

export function applySidebarIconAlign(cfg) {
  const enabled = cfg?.alignSidebarIcons !== false;
  let style = document.querySelector(`style[data-plugin-css="${CSS_ID}"]`);
  if (enabled && !style) {
    style = document.createElement('style');
    style.dataset.plugin = 'dsh-appearance';
    style.dataset.pluginCss = CSS_ID;
    style.textContent = ICON_ALIGN_CSS;
    document.head.appendChild(style);
  } else if (!enabled && style) {
    style.remove();
  }
}
