/**
 * 侧边栏布局：把左侧边栏作为整体上下移动，微调与窗口顶部的距离。
 *
 * 原生 .hHd-Xa_root 贴顶且高度铺满视口。通过注入 margin-top + 高度补偿，
 * 让整条侧边栏下移 N 像素、底部仍贴齐视口底，纯 CSS 注入、不动主包。
 *
 * 配置：sidebarOffset（px，非负）。仅当偏移 > 0 时才注入（否则保持原生布局，
 * 连 CSS 都不写）。
 */

const CSS_ID = 'dsh-appearance/sidebar-order.css';

export function applySidebarOffset(cfg) {
  const style = document.querySelector(`style[data-plugin-css="${CSS_ID}"]`);
  const offset = cfg?.sidebarOffset;
  if (typeof offset !== 'number' || !(offset > 0)) {
    style?.remove();
    return;
  }
  const px = Math.round(offset);
  const css = `.hHd-Xa_root { margin-top: ${px}px; height: calc(100% - ${px}px); }`;
  if (style) {
    style.textContent = css;
    return;
  }
  const el = document.createElement('style');
  el.dataset.plugin = 'dsh-appearance';
  el.dataset.pluginCss = CSS_ID;
  el.textContent = css;
  document.head.appendChild(el);
}