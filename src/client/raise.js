/**
 * 层级抬升器（通用兜底）：保证 drag strip 区域内的交互元素始终可点。
 *
 * drag strip（主进程注入，#dsh-drag-strip, z-index:100, app-region:drag）覆盖
 * 窗口顶部，与其重叠的交互元素若没有 no-drag 或身处创建 stacking context 的
 * 定位祖先（fixed/absolute/relative）内，点击会被 strip 劫持（拖窗口）或盖住。
 *
 * 主进程已内置同款算法（递归抬升祖先链 + 定时收敛）；这里保留一份不依赖
 * better-sidebar 类名白名单的通用实现作为兜底，防止主进程版本落后或未来回归：
 *   - 与 strip 重叠的交互元素 → no-drag + 抬升最外层 z<200 祖先（class 实现，static 祖先转 relative）
 *   - MutationObserver + 定时扫描双保险
 * 幂等：与主进程叠加无害（static 祖先用 data-dsh-static-raised 标记，由主进程清理恢复）。
 */

const STRIP_Z = 100;

const INTERACTIVE_SELECTOR = [
  'button', 'a', 'input', 'textarea', 'select', '[role="button"]', '[tabindex]',
  '[contenteditable]', '[onclick]', '[onmousedown]',
  '[class*="tab"]', '[class*="btn"]', '[class*="Button"]', '[class*="icon"]',
  '[class*="crumb"]', '[class*="menu"]', '[class*="dropdown"]', '[class*="close"]'
].join(',');

const RAISED_CLASS = 'dsh-drag-raised';
const STYLE_ID = 'dsh-drag-strip-raise-style';

function getStrip() {
  return document.getElementById('dsh-drag-strip');
}

function ensureRaiseStyle() {
  const css = '.' + RAISED_CLASS + ' { z-index: 200 !important; }' +
    // 面板 tab 栏：提到拖动条上层（右侧/底部面板折叠时 tab 栏在 strip 区；
    // 面板本体 z-auto 不创建 stacking context，tabBar 提 z 即可越过 strip）。
    '[class*="tabBar"] { position: relative !important; z-index: 200 !important; }' +
    // sessionLog/导出按钮：始终提到拖动条上层（视觉完整且可点）。
    '[class*="sessionLogButton"] { position: relative !important; z-index: 200 !important; }' +
    // shl-session-history 滑轨：高于抬升容器（200）以保持可见，低于弹窗
    // （tooltip 401、modal 1000）以免盖住弹窗。
    '.shlrail_fixed { z-index: 201 !important; }' +
    '.shlrail_tooltip { z-index: 202 !important; }';
  const existing = document.getElementById(STYLE_ID);
  if (existing) {
    // The main process injects this id first; if that version predates the
    // rail compatibility, top it up so the fallback actually covers it.
    if (!existing.textContent.includes('.shlrail_fixed')) {
      existing.textContent = css;
    }
    return;
  }
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}

function overlapsStrip(el) {
  const strip = getStrip();
  if (!strip) return false;
  const sr = strip.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 &&
    r.top < sr.bottom && r.bottom > sr.top &&
    r.left < sr.right && r.right > sr.left &&
    r.top < window.innerHeight && r.bottom > 0;
}

function raiseAncestors(el) {
  let target = null;
  let anc = el.parentElement;
  while (anc && anc !== document.body && anc !== document.documentElement) {
    // Already raised: an outer ancestor sits above the strip, so everything
    // inside it is reachable — nothing more to do. Reading computed z-index
    // alone is unreliable because the raise class bumps it to 200.
    if (anc.classList.contains(RAISED_CLASS)) {
      return;
    }
    const st = getComputedStyle(anc);
    // An ancestor already at/above the strip level: everything inside it is
    // above the strip, so raising further would only cover unrelated siblings
    // (sidebar tabs, the session rail) for no benefit.
    const z = parseInt(st.zIndex, 10);
    if (st.position !== 'static' && !Number.isNaN(z) && z >= 100) {
      return;
    }
    if (Number.isNaN(z) || z < 200) {
      // Remember the outermost positioned ancestor still below the strip
      // level. Hoisting that single outer container lifts the element out of
      // every intermediate stacking context (fixed panels, transparent
      // wrappers) without re-ordering siblings inside the panel.
      target = { el: anc, st };
    }
    anc = anc.parentElement;
  }
  if (target) {
    if (target.st.position === 'static') {
      target.el.style.position = 'relative';
      target.el.dataset.dshStaticRaised = '1';
    }
    target.el.classList.add(RAISED_CLASS);
    return;
  }
  // No positioned ancestor below the strip: lift the element itself, keeping
  // its own position (fixed/absolute must not become relative or the layout
  // breaks); static elements are promoted to relative so z-index applies.
  const st = getComputedStyle(el);
  if (st.position === 'static') el.style.position = 'relative';
  el.style.zIndex = '200';
  el.dataset.dshRaised = '1';
}

function apply() {
  const strip = getStrip();
  if (!strip) return;
  ensureRaiseStyle();

  for (const el of document.querySelectorAll(INTERACTIVE_SELECTOR)) {
    try {
      if (!overlapsStrip(el)) continue;
      el.style.setProperty('-webkit-app-region', 'no-drag');
      raiseAncestors(el);
    } catch (e) {}
  }
}

export function installRaiseOverlay() {
  if (document.body.dataset.dshAppearanceRaise === '1') return;
  document.body.dataset.dshAppearanceRaise = '1';

  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(apply, 100);
  };
  apply();
  new MutationObserver(schedule).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style']
  });
  // Panel show/hide and window resizing are class/style changes (not node
  // insertions); listen to both so the raise logic reacts immediately.
  window.addEventListener('resize', schedule);
  setInterval(apply, 1500);
}