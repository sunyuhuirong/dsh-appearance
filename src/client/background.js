/**
 * 背景图片：把上传的图片作为整窗背景，并用主题背景色做半透明遮罩。
 *
 * 纯 CSS 注入、不动主包。启用时给 <body> 加 dsh-appearance-bg 类并写入
 * data URL 与遮罩透明度变量；移除背景（无 backgroundImage）时还原原生外观。
 *
 * 图片数据（data URL）存在 localStorage（settings.yaml 不适合存超大字符串，
 * 实测会因含 ":" 与体积被静默丢弃）；settings 仅存布尔标志 backgroundImage
 * 与透明度 backgroundMaskOpacity。
 *
 * 分层（下→上）：body 图片 → body::after 主题色遮罩 → 透明化的根容器
 * （.pI_x6G_frame / .pI_x6G_sidebarCol / .hHd-Xa_root）→ 内部卡片保留 token 背景。
 */

const CSS_ID = 'dsh-appearance/background.css';
export const BG_STORE_KEY = 'dsh-appearance:backgroundImage';

function readStoredImage() {
  try {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(BG_STORE_KEY);
    return typeof raw === 'string' && raw.startsWith('data:image') ? raw : null;
  } catch {
    return null;
  }
}

export function applyBackground(cfg) {
  const style = document.querySelector(`style[data-plugin-css="${CSS_ID}"]`);

  const enabled = cfg?.backgroundImage === true;
  const raw = enabled ? readStoredImage() : null;
  if (!raw) {
    if (style) style.remove();
    document.body.classList.remove('dsh-appearance-bg');
    return;
  }

  const opacity = Math.max(0, Math.min(100, Number.isFinite(cfg.backgroundMaskOpacity) ? cfg.backgroundMaskOpacity : 70));
  const css = `
:root { --dsh-appearance-mask-opacity: ${opacity}%; }
body.dsh-appearance-bg {
  background-image: url("${raw}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
body.dsh-appearance-bg::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: color-mix(in srgb, var(--dsw-alias-bg-base) var(--dsh-appearance-mask-opacity), transparent);
}
.pI_x6G_frame,
.pI_x6G_sidebarCol,
.hHd-Xa_root { background: transparent !important; }
.pI_x6G_centerCol,
.pI_x6G_detailsCol,
.wSkVaW_root,
.wSkVaW_root * { background-color: transparent !important; }
.wSkVaW_root pre,
.wSkVaW_root code { background-color: color-mix(in srgb, var(--dsw-alias-bg-elevated) 90%, transparent) !important; }
.gdEzaW_bubble { background-color: color-mix(in srgb, var(--dsw-alias-bg-elevated) 82%, transparent) !important; }
`;

  document.body.classList.add('dsh-appearance-bg');
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
