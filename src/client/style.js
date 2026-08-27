/**
 * 插件设置面板样式：按 dsh 设计语言编写，仅使用 --dsw-* token。
 * 注入方式与原生模块 CSS 一致（style 元素 + data-plugin 标记）。
 */

const CSS_ID = 'dsh-appearance/style.css';

const APPEARANCE_CSS = `
.dsh-appearance-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.dsh-appearance-section > h3 {
  color: var(--dsw-alias-label-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 12px 0 4px;
}
.dsh-appearance-preset-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.dsh-appearance-preset-grid button {
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 16px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  flex: 1 1 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
  display: flex;
}
.dsh-appearance-preset-grid button:hover:not(.dsh-appearance-active) {
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-appearance-preset-grid .dsh-appearance-active {
  background: var(--dsw-alias-bg-module-platform);
  border-color: var(--dsw-static-neutral-bluish-400);
}
.dsh-appearance-swatch {
  display: flex;
  gap: 4px;
  width: 100%;
  height: 22px;
  border-radius: 8px;
  overflow: hidden;
}
.dsh-appearance-swatch i {
  flex: 1;
  display: block;
  background-color: var(--dsw-alias-bg-layer-2);
}
.dsh-appearance-swatch i:first-child { border-radius: 8px 0 0 8px; }
.dsh-appearance-swatch i:last-child { border-radius: 0 8px 8px 0; }
.dsh-appearance-action {
  align-self: flex-start;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  padding: 4px 12px;
  cursor: pointer;
}
.dsh-appearance-action:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

/* 隐藏设置面板内的辅助说明文字 */
.dsh-appearance-section .dsh-appearance-switch-desc {
  display: none !important;
}
.dsh-appearance-sidebar-offset {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dsh-appearance-sidebar-offset-label {
  flex: 0 0 auto;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  line-height: 20px;
}
.dsh-appearance-sidebar-offset input[type='range'] {
  flex: 1;
  min-width: 0;
  accent-color: var(--dsw-alias-brand-primary);
}
.dsh-appearance-sidebar-offset-value {
  flex: 0 0 auto;
  min-width: 40px;
  text-align: right;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
}

.dsh-appearance-divider {
  height: 1px;
  background: var(--dsw-alias-border-l2);
  margin: 0 -4px;
}

.dsh-appearance-switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  line-height: 22px;
  color: var(--dsw-alias-label-primary);
}
.dsh-appearance-switch-row .dsh-appearance-switch-desc {
  display: block;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
}
.dsh-appearance-switch {
  appearance: none;
  -webkit-appearance: none;
  flex: 0 0 auto;
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background: var(--dsw-alias-bg-module-platform);
  border: 1px solid var(--dsw-alias-border-l2);
  position: relative;
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease;
}
.dsh-appearance-switch::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--dsw-alias-label-secondary);
  transition: transform .15s ease, background .15s ease;
}
.dsh-appearance-switch:checked {
  background: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-label-primary);
}
.dsh-appearance-switch:checked::after {
  transform: translateX(18px);
  background: var(--dsw-alias-bg-base);
}
.dsh-appearance-switch:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}

.dsh-appearance-background {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dsh-appearance-background-preview {
  width: 100%;
  max-height: 160px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2);
}
.dsh-appearance-background-actions {
  display: flex;
  gap: 8px;
}
.dsh-appearance-mask-label {
  color: var(--dsw-alias-label-tertiary);
  font-size: 13px;
  line-height: 20px;
}
.dsh-appearance-background input[type="range"] {
  width: 100%;
  height: 16px;
  accent-color: var(--dsw-alias-brand-primary);
  cursor: pointer;
}
.dsh-appearance-mask-value {
  text-align: right;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
}

`;


export function installAppearanceCss() {
  if (document.querySelector(`style[data-plugin-css="${CSS_ID}"]`)) return;
  const style = document.createElement('style');
  style.dataset.plugin = 'dsh-appearance';
  style.dataset.pluginCss = CSS_ID;
  style.textContent = APPEARANCE_CSS;
  document.head.appendChild(style);
}

const CONVERSATION_CSS_ID = 'dsh-appearance/conversation-readability.css';

/* 会话可读性（第 4 点）：仅用稳定选择器 + dsw token，自动适配深浅主题。
   开关关闭时整段不注入，回到原生。 */
const CONVERSATION_READABILITY_CSS = `
[data-chat-flow-kind="assistant-step"] p { margin: 0 0 12px; }
[data-chat-flow-kind="assistant-step"] p:last-child { margin-bottom: 0; }
[data-chat-flow-kind="assistant-step"] h1,
[data-chat-flow-kind="assistant-step"] h2,
[data-chat-flow-kind="assistant-step"] h3,
[data-chat-flow-kind="assistant-step"] h4 { margin: 18px 0 10px; line-height: 1.4; }
[data-chat-flow-kind="assistant-step"] ul,
[data-chat-flow-kind="assistant-step"] ol { margin: 0 0 12px; padding-left: 22px; }
[data-chat-flow-kind="assistant-step"] li { margin: 4px 0; }

/* 表格渲染优化：用组合选择器，防止 data-chat-flow-kind 不在祖先上时失效。
   _markdown_ / _tableScroll_ 是 CSS-Module 前缀，会随构建变 hash，但前缀稳定。 */
[data-chat-flow-kind="assistant-step"] table,
[class*="_markdown_"] table,
[class*="_tableScroll_"] > table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  overflow: hidden;
}
[data-chat-flow-kind="assistant-step"] th,
[data-chat-flow-kind="assistant-step"] td,
[class*="_markdown_"] th,
[class*="_markdown_"] td,
[class*="_tableScroll_"] > table th,
[class*="_tableScroll_"] > table td {
  border-bottom: 1px solid var(--dsw-alias-border-l2);
  border-right: 1px solid var(--dsw-alias-border-l2);
  padding: 14px 24px !important;
  min-width: 80px !important;
  text-align: left;
  vertical-align: top;
}
[data-chat-flow-kind="assistant-step"] th:last-child,
[data-chat-flow-kind="assistant-step"] td:last-child,
[class*="_markdown_"] th:last-child,
[class*="_markdown_"] td:last-child,
[class*="_tableScroll_"] > table th:last-child,
[class*="_tableScroll_"] > table td:last-child {
  border-right: none;
}
[data-chat-flow-kind="assistant-step"] tr:last-child td,
[class*="_markdown_"] tr:last-child td,
[class*="_tableScroll_"] > table tr:last-child td {
  border-bottom: none;
}
[data-chat-flow-kind="assistant-step"] thead th,
[class*="_markdown_"] thead th,
[class*="_tableScroll_"] > table thead th {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, var(--dsw-alias-bg-module-platform));
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
  text-align: center;
}
[data-chat-flow-kind="assistant-step"] tbody td.dsh-tbl-center,
[class*="_markdown_"] tbody td.dsh-tbl-center,
[class*="_tableScroll_"] > table tbody td.dsh-tbl-center {
  text-align: center;
}

/* 抑制 DSH 核心 .md-table-wide:hover 的 padding-bottom 突变（8px→0），
   该突变会压缩容器高度，导致表格底部边框（分割线）产生像素级上移。 */
[class*="_tableScroll_"].md-table-wide:hover,
[class*="_tableScroll_"].md-table-wide:focus-visible {
  overflow-x: auto;
  padding-bottom: var(--dsh-scrollbar-width, 8px) !important;
}

.md-code-block { border: 1px solid var(--dsw-alias-border-l2); }
pre.shiki { transition: border-color .15s ease; }

[data-chat-flow-kind="assistant-step"] code:not(pre code) {
  background: var(--dsw-alias-bg-module-platform);
  border-radius: 4px;
  padding: 2px 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.92em;
}

[data-chat-flow-kind="assistant-step"] blockquote {
  margin: 12px 0;
  padding: 8px 14px;
  border-left: 3px solid var(--dsw-alias-brand-primary);
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-secondary);
  border-radius: 0 6px 6px 0;
}

[data-chat-flow-kind] button[aria-label="复制"] {
  opacity: 0;
  transition: opacity .15s ease;
}
[data-chat-flow-kind]:hover button[aria-label="复制"],
[data-chat-flow-kind] button[aria-label="复制"]:focus-visible {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  pre.shiki,
  [data-chat-flow-kind] button[aria-label="复制"] { transition: none; }
}
`;

export function setConversationReadability(enabled) {
  if (enabled && !conversationCssInjected) {
    const style = document.createElement('style');
    style.dataset.plugin = 'dsh-appearance';
    style.dataset.pluginCss = CONVERSATION_CSS_ID;
    style.textContent = CONVERSATION_READABILITY_CSS;
    document.head.appendChild(style);
    conversationCssInjected = true;
    startTableObserver();
  } else if (!enabled && conversationCssInjected) {
    conversationCssInjected = false;
    const existing = document.querySelector(`style[data-plugin-css="${CONVERSATION_CSS_ID}"]`);
    if (existing) existing.remove();
    stopTableObserver();
    document.querySelectorAll('[data-chat-flow-kind="assistant-step"] tbody td.dsh-tbl-center')
      .forEach((td) => td.classList.remove('dsh-tbl-center'));
  }
}

/**
 * 表格单元格内容自适应对齐：
 * 纯数字 / 货币 / 百分比 / 极短词 → 居中；长文本 → 左对齐。
 * 仅给 td 打 class（不改结构），CSS 负责对齐。
 */
function isCenterableCell(td) {
  const text = (td.textContent || '').trim();
  if (!text) return false;
  // 含换行 → 多行内容 → 左对齐
  if (text.includes('\n')) return false;
  // 含句子标点（中英文逗号/句号/分号/冒号/顿号/问号/叹号） → 视为句子 → 左对齐
  if (/[。，；：、！?,.]/.test(text)) return false;
  // 纯数值（含千分位/小数/货币/单位/空格分隔） → 居中
  if (/^[\d,.\-+/$¥€£%×÷:\s]+$/.test(text) && /\d/.test(text)) return true;
  // 其余短词/词组（≤12 字符，无句子标点） → 标签 → 居中
  return text.length <= 12;
}

function alignTableCells(root = document) {
  const tables = root.querySelectorAll('[data-chat-flow-kind="assistant-step"] table');
  tables.forEach((table) => {
    table.querySelectorAll('tbody td').forEach((td) => {
      if (isCenterableCell(td)) td.classList.add('dsh-tbl-center');
      else td.classList.remove('dsh-tbl-center');
    });
  });
}

let tableObserver = null;
let conversationCssInjected = false;
function startTableObserver() {
  if (tableObserver) return;
  alignTableCells();
  let pending = false;
  tableObserver = new MutationObserver(() => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      alignTableCells();
    });
  });
  tableObserver.observe(document.body, { childList: true, subtree: true });
}

function stopTableObserver() {
  if (tableObserver) {
    tableObserver.disconnect();
    tableObserver = null;
  }
}
