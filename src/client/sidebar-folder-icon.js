/**
 * 工作区项目行图标稳定化：内核（dsh-client-ui-workspace）在悬停项目行时
 * 会把文件夹图标换成展开箭头（chevron），视觉上很割裂。
 *
 * 内核规则（CSS-Module hash 前缀随构建变化，这里用稳定的 _class_ 子串匹配，
 * 与本插件 conversation 样式对 `_markdown_` 的处理方式一致）：
 *   ._projectRow ._chevron        { display: none }
 *   ._projectRow:hover ._chevron  { display: inline-flex }
 *   ._projectRow:hover ._folder   { display: none }
 *
 * 覆盖策略：箭头永久隐藏 + 文件夹悬停时强制可见（!important 压过内核非重要声明，
 * 与注入顺序无关）。展开态本身由文件夹开/合图标表达
 * （expanded ? IconFolderOpen : IconFolderClose），去掉箭头不丢失状态信息。
 *
 * 配置：stableProjectFolderIcon（默认开启；关闭时移除注入，恢复原生行为）。
 */

const CSS_ID = 'dsh-appearance/sidebar-folder-icon.css';

const STABLE_FOLDER_ICON_CSS = `
[class*="_projectRow"] [class*="_chevron"] { display: none !important; }
[class*="_projectRow"]:hover [class*="_folder"],
[class*="_projectRow"]:focus-within [class*="_folder"] { display: inline-flex !important; }
`;

export function applyStableProjectFolderIcon(cfg) {
  const enabled = cfg?.stableProjectFolderIcon !== false;
  let style = document.querySelector(`style[data-plugin-css="${CSS_ID}"]`);
  if (enabled && !style) {
    style = document.createElement('style');
    style.dataset.plugin = 'dsh-appearance';
    style.dataset.pluginCss = CSS_ID;
    style.textContent = STABLE_FOLDER_ICON_CSS;
    document.head.appendChild(style);
  } else if (!enabled && style) {
    style.remove();
  }
}
