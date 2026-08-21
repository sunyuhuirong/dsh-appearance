/**
 * 弹窗层级抬升器（JS 兜底）：配合 style.js 的 CSS :has() 规则。
 *
 * 现象：打开设置弹窗，会话历史滑轨（.shlrail_fixed, z=201）横线画在弹窗之上。
 * 根因（2026-08-20 复盘）：遮罩本身不透明（会话文字被挡），但滑轨所处堆叠上下文
 * 的 root 级层级高于弹窗 overlay 的 z=1000 —— 两者不在同一堆叠上下文，
 * 数值 201 < 1000 不构成遮挡关系。
 *
 * 修正：检测 [role="dialog"]（稳定 aria 属性，不碰易碎哈希 class）挂载时，
 * 把它向上最近的 body 直接子级（portal root，即 overlay 容器）z-index 提到 9999。
 * 弹窗关闭时该容器随 portal 卸载，无需恢复、零延迟；不改遮罩背景，
 * 深浅主题均安全。
 *
 * 安全约束：
 * - 仅当 portal root 是定位元素（fixed/absolute，浮层特征）才抬升，
 *   避免 dialog 非弹窗形态内嵌在应用根容器时误抬整个应用。
 * - data 标记保证幂等；overlay 卸载后标记随节点消失，重开自动重处理。
 */

const DIALOG_SELECTOR = '[role="dialog"]';
const RAISED_FLAG = 'dshModalRaised';
const TOP_Z = '9999';

function isOverlayLike(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  const pos = getComputedStyle(el).position;
  return pos === 'fixed' || pos === 'absolute';
}

function raiseOverlayFor(dialog) {
  // 沿祖先链上溯到 body 直接子级（Modal portal 的 overlay root）
  let root = dialog;
  while (
    root.parentElement &&
    root.parentElement !== document.body &&
    root.parentElement !== document.documentElement
  ) {
    root = root.parentElement;
  }
  if (!isOverlayLike(root)) return;
  if (root.dataset[RAISED_FLAG] === '1') return;
  root.dataset[RAISED_FLAG] = '1';
  root.style.setProperty('z-index', TOP_Z, 'important');
}

function scan(root) {
  if (root.nodeType !== 1) return;
  if (root.matches && root.matches(DIALOG_SELECTOR)) {
    raiseOverlayFor(root);
    return;
  }
  const dlg = root.querySelector && root.querySelector(DIALOG_SELECTOR);
  if (dlg) raiseOverlayFor(dlg);
}

export function installModalRaise() {
  if (document.body.dataset.dshAppearanceModalRaise === '1') return;
  document.body.dataset.dshAppearanceModalRaise = '1';

  scan(document.body);
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        scan(node);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
}
