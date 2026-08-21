window.__ModuleLoader__.load({
	id: "dsh-appearance",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// packages/extension/dsh-appearance/src/client/index.jsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply2,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// packages/extension/dsh-appearance/src/client/tokens.js
var PRESET_THEMES = {
  default: { labelKey: "preset.default", light: {}, dark: {} },
  minimal: {
    labelKey: "preset.minimal",
    light: {
      "--dsw-alias-bg-base": "#ffffff",
      "--dsw-alias-bg-layer-1": "#fafafa",
      "--dsw-alias-bg-layer-2": "#f4f4f5",
      "--dsw-alias-bg-overlay": "#fafafa",
      "--dsw-alias-bg-module-platform": "#fafafa",
      "--dsw-specific-sidebar-fill": "#fafafa",
      "--dsw-alias-label-primary": "#18181b",
      "--dsw-alias-label-secondary": "#52525b",
      "--dsw-alias-label-tertiary": "#a1a1aa",
      "--dsw-alias-label-primary-dimmed": "#71717a",
      "--dsw-alias-brand-primary": "#3f3f46",
      "--dsw-alias-brand-text": "#ffffff",
      "--dsw-alias-border-l1": "#e4e4e7",
      "--dsw-alias-border-l2": "#d4d4d8",
      "--dsw-alias-state-error-primary": "#dc2626",
      "--dsw-alias-state-success-primary": "#16a34a",
      "--dsw-alias-state-warn-primary": "#d97706",
      "--dsw-alias-state-business-primary": "#3f3f46",
      "--dsw-alias-interactive-bg-hover": "#ececee",
      "--dsw-alias-interactive-bg-active": "#e4e4e7",
      "--dsw-alias-button-primary-fill": "#18181b",
      "--dsw-alias-button-primary-hover": "#27272a"
    },
    dark: {
      "--dsw-alias-bg-base": "#09090b",
      "--dsw-alias-bg-layer-1": "#101013",
      "--dsw-alias-bg-layer-2": "#18181b",
      "--dsw-alias-bg-overlay": "#101013",
      "--dsw-alias-bg-module-platform": "#18181b",
      "--dsw-specific-sidebar-fill": "#101013",
      "--dsw-alias-label-primary": "#fafafa",
      "--dsw-alias-label-secondary": "#a1a1aa",
      "--dsw-alias-label-tertiary": "#63636b",
      "--dsw-alias-label-primary-dimmed": "#8a8a93",
      "--dsw-alias-brand-primary": "#fafafa",
      "--dsw-alias-brand-text": "#09090b",
      "--dsw-alias-border-l1": "#27272a",
      "--dsw-alias-border-l2": "#3f3f46",
      "--dsw-alias-state-error-primary": "#f87171",
      "--dsw-alias-state-success-primary": "#4ade80",
      "--dsw-alias-state-warn-primary": "#fbbf24",
      "--dsw-alias-state-business-primary": "#a1a1aa",
      "--dsw-alias-interactive-bg-hover": "#1f1f22",
      "--dsw-alias-interactive-bg-active": "#27272a",
      "--dsw-alias-button-primary-fill": "#fafafa",
      "--dsw-alias-button-primary-hover": "#e4e4e7"
    }
  },
  violet: {
    labelKey: "preset.violet",
    light: {
      "--dsw-alias-bg-base": "#faf8ff",
      "--dsw-alias-bg-layer-1": "#f5f1ff",
      "--dsw-alias-bg-layer-2": "#eee9fb",
      "--dsw-alias-bg-overlay": "#f5f1ff",
      "--dsw-alias-bg-module-platform": "#eee9fb",
      "--dsw-specific-sidebar-fill": "#f5f1ff",
      "--dsw-alias-label-primary": "#2a2350",
      "--dsw-alias-label-secondary": "#5b5386",
      "--dsw-alias-label-tertiary": "#9a93bd",
      "--dsw-alias-label-primary-dimmed": "#756db0",
      "--dsw-alias-brand-primary": "#7c3aed",
      "--dsw-alias-brand-text": "#ffffff",
      "--dsw-alias-border-l1": "#e4e0f3",
      "--dsw-alias-border-l2": "#d3cceb",
      "--dsw-alias-state-error-primary": "#dc2626",
      "--dsw-alias-state-success-primary": "#16a34a",
      "--dsw-alias-state-warn-primary": "#d97706",
      "--dsw-alias-state-business-primary": "#7c3aed",
      "--dsw-alias-interactive-bg-hover": "#e8e2f8",
      "--dsw-alias-interactive-bg-active": "#ddd4f4",
      "--dsw-alias-button-primary-fill": "#7c3aed",
      "--dsw-alias-button-primary-hover": "#6d28d9"
    },
    dark: {
      "--dsw-alias-bg-base": "#12101f",
      "--dsw-alias-bg-layer-1": "#181529",
      "--dsw-alias-bg-layer-2": "#201c36",
      "--dsw-alias-bg-overlay": "#181529",
      "--dsw-alias-bg-module-platform": "#201c36",
      "--dsw-specific-sidebar-fill": "#181529",
      "--dsw-alias-label-primary": "#ece7fb",
      "--dsw-alias-label-secondary": "#a79fd1",
      "--dsw-alias-label-tertiary": "#6f6898",
      "--dsw-alias-label-primary-dimmed": "#8f88b8",
      "--dsw-alias-brand-primary": "#a78bfa",
      "--dsw-alias-brand-text": "#1c1740",
      "--dsw-alias-border-l1": "#2a2547",
      "--dsw-alias-border-l2": "#3b3470",
      "--dsw-alias-state-error-primary": "#f87171",
      "--dsw-alias-state-success-primary": "#4ade80",
      "--dsw-alias-state-warn-primary": "#fbbf24",
      "--dsw-alias-state-business-primary": "#a78bfa",
      "--dsw-alias-interactive-bg-hover": "#241f40",
      "--dsw-alias-interactive-bg-active": "#2e2850",
      "--dsw-alias-button-primary-fill": "#7c3aed",
      "--dsw-alias-button-primary-hover": "#8b5cf6"
    }
  },
  forest: {
    labelKey: "preset.forest",
    light: {
      "--dsw-alias-bg-base": "#f8fbf6",
      "--dsw-alias-bg-layer-1": "#f1f8ef",
      "--dsw-alias-bg-layer-2": "#e8f2e5",
      "--dsw-alias-bg-overlay": "#f1f8ef",
      "--dsw-alias-bg-module-platform": "#e8f2e5",
      "--dsw-specific-sidebar-fill": "#f1f8ef",
      "--dsw-alias-label-primary": "#1f3d23",
      "--dsw-alias-label-secondary": "#4e6b52",
      "--dsw-alias-label-tertiary": "#8aa58d",
      "--dsw-alias-label-primary-dimmed": "#6b8a6f",
      "--dsw-alias-brand-primary": "#2f9e44",
      "--dsw-alias-brand-text": "#ffffff",
      "--dsw-alias-border-l1": "#ddebd8",
      "--dsw-alias-border-l2": "#c9dfc3",
      "--dsw-alias-state-error-primary": "#dc2626",
      "--dsw-alias-state-success-primary": "#2f9e44",
      "--dsw-alias-state-warn-primary": "#d97706",
      "--dsw-alias-state-business-primary": "#2f9e44",
      "--dsw-alias-interactive-bg-hover": "#e2efdf",
      "--dsw-alias-interactive-bg-active": "#d7e8d3",
      "--dsw-alias-button-primary-fill": "#2f9e44",
      "--dsw-alias-button-primary-hover": "#2b8a3e"
    },
    dark: {
      "--dsw-alias-bg-base": "#0e1712",
      "--dsw-alias-bg-layer-1": "#131f18",
      "--dsw-alias-bg-layer-2": "#1a2a1f",
      "--dsw-alias-bg-overlay": "#131f18",
      "--dsw-alias-bg-module-platform": "#1a2a1f",
      "--dsw-specific-sidebar-fill": "#131f18",
      "--dsw-alias-label-primary": "#e4f2e6",
      "--dsw-alias-label-secondary": "#9cbfa3",
      "--dsw-alias-label-tertiary": "#5f8266",
      "--dsw-alias-label-primary-dimmed": "#84a88c",
      "--dsw-alias-brand-primary": "#69db7c",
      "--dsw-alias-brand-text": "#0f2013",
      "--dsw-alias-border-l1": "#223527",
      "--dsw-alias-border-l2": "#2f4a36",
      "--dsw-alias-state-error-primary": "#f87171",
      "--dsw-alias-state-success-primary": "#4ade80",
      "--dsw-alias-state-warn-primary": "#fbbf24",
      "--dsw-alias-state-business-primary": "#69db7c",
      "--dsw-alias-interactive-bg-hover": "#1a2b20",
      "--dsw-alias-interactive-bg-active": "#24402c",
      "--dsw-alias-button-primary-fill": "#2f9e44",
      "--dsw-alias-button-primary-hover": "#37b24d"
    }
  },
  amber: {
    labelKey: "preset.amber",
    light: {
      "--dsw-alias-bg-base": "#fffcf7",
      "--dsw-alias-bg-layer-1": "#fbf5ea",
      "--dsw-alias-bg-layer-2": "#f5ecdb",
      "--dsw-alias-bg-overlay": "#fbf5ea",
      "--dsw-alias-bg-module-platform": "#f5ecdb",
      "--dsw-specific-sidebar-fill": "#fbf5ea",
      "--dsw-alias-label-primary": "#3a2e1e",
      "--dsw-alias-label-secondary": "#6f5d42",
      "--dsw-alias-label-tertiary": "#a89b83",
      "--dsw-alias-label-primary-dimmed": "#8a7959",
      "--dsw-alias-brand-primary": "#d97706",
      "--dsw-alias-brand-text": "#ffffff",
      "--dsw-alias-border-l1": "#efe3cc",
      "--dsw-alias-border-l2": "#e2d2b2",
      "--dsw-alias-state-error-primary": "#dc2626",
      "--dsw-alias-state-success-primary": "#16a34a",
      "--dsw-alias-state-warn-primary": "#d97706",
      "--dsw-alias-state-business-primary": "#d97706",
      "--dsw-alias-interactive-bg-hover": "#f0e7d3",
      "--dsw-alias-interactive-bg-active": "#e8dac0",
      "--dsw-alias-button-primary-fill": "#d97706",
      "--dsw-alias-button-primary-hover": "#b45309"
    },
    dark: {
      "--dsw-alias-bg-base": "#1b1610",
      "--dsw-alias-bg-layer-1": "#241d14",
      "--dsw-alias-bg-layer-2": "#2f261a",
      "--dsw-alias-bg-overlay": "#241d14",
      "--dsw-alias-bg-module-platform": "#2f261a",
      "--dsw-specific-sidebar-fill": "#241d14",
      "--dsw-alias-label-primary": "#f5ead9",
      "--dsw-alias-label-secondary": "#c0ac8c",
      "--dsw-alias-label-tertiary": "#857155",
      "--dsw-alias-label-primary-dimmed": "#a89372",
      "--dsw-alias-brand-primary": "#fbbf24",
      "--dsw-alias-brand-text": "#2a1f0d",
      "--dsw-alias-border-l1": "#3a2f21",
      "--dsw-alias-border-l2": "#4f412c",
      "--dsw-alias-state-error-primary": "#f87171",
      "--dsw-alias-state-success-primary": "#4ade80",
      "--dsw-alias-state-warn-primary": "#fbbf24",
      "--dsw-alias-state-business-primary": "#fbbf24",
      "--dsw-alias-interactive-bg-hover": "#2c2417",
      "--dsw-alias-interactive-bg-active": "#453624",
      "--dsw-alias-button-primary-fill": "#d97706",
      "--dsw-alias-button-primary-hover": "#b45309"
    }
  }
};

// packages/extension/dsh-appearance/src/client/theme.js
function createThemeEngine(ctx, scope) {
  const source = "dsh-appearance";
  let disposer = null;
  function composeTokens(cfg) {
    const preset = PRESET_THEMES[cfg.themePreset] ?? PRESET_THEMES.default;
    const names = /* @__PURE__ */ new Set([
      ...Object.keys(preset.light),
      ...Object.keys(preset.dark)
    ]);
    const out = {};
    for (const name of names) {
      out[name] = {
        light: preset.light[name] || preset.dark[name] || "",
        dark: preset.dark[name] || preset.light[name] || ""
      };
    }
    return out;
  }
  function apply3() {
    const cfg = scope.getSnapshot().value ?? {};
    const tokens = composeTokens(cfg);
    disposer?.();
    disposer = null;
    if (Object.keys(tokens).length === 0) return;
    try {
      disposer = ctx.theme.overrideTokens(source, tokens);
    } catch (error) {
      ctx.logger?.warn?.("[dsh-appearance] theme apply failed", error);
    }
  }
  return { apply: apply3 };
}

// packages/extension/dsh-appearance/src/client/style.js
var CSS_ID = "dsh-appearance/style.css";
var APPEARANCE_CSS = `
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
  margin: 0 0 4px;
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

/* \u5F39\u7A97\u5C42\u7EA7\u4FEE\u6B63\uFF1AModal \u7ECF portal \u6302\u5230 body\uFF0Croot \u5BB9\u5668\uFF08role="presentation"\uFF09z=1000\uFF0C
   \u4F46\u4F1A\u8BDD\u5386\u53F2\u6ED1\u8F68\u6240\u5904\u5806\u53E0\u4E0A\u4E0B\u6587\u7684 root \u7EA7\u5C42\u7EA7\u9AD8\u4E8E 1000\uFF0C\u6ED1\u8F68\u6A2A\u7EBF\u753B\u5728\u5F39\u7A97\u4E4B\u4E0A\u3002
   \uFF08\u906E\u7F69\u672C\u8EAB\u4E0D\u900F\u660E\u2014\u2014\u4F1A\u8BDD\u6587\u5B57\u88AB\u6321\u5373\u4E3A\u8BC1\uFF1B\u95EE\u9898\u662F\u5C42\u7EA7\u800C\u975E\u900F\u660E\u5EA6\u3002\uFF09
   \u5C06\u542B [role="dialog"] \u7684\u6D6E\u5C42\u5BB9\u5668\u63D0\u5230 9999\uFF08app \u9876\u5C42\u54E8\u5175\u503C\uFF09\u3002
   \u7EAF CSS\u3001\u540C\u5E27\u751F\u6548\uFF1B\u5F39\u7A97\u5173\u95ED\u65F6\u5BB9\u5668\u968F portal \u5378\u8F7D\uFF0C\u65E0\u6062\u590D\u8FC7\u7A0B\u3001\u96F6\u5EF6\u8FDF\uFF1B
   \u4E0D\u6539\u906E\u7F69\u80CC\u666F\uFF0C\u6DF1\u6D45\u4E3B\u9898\u5747\u65E0\u9ED1\u906E\u7F69\u526F\u4F5C\u7528\u3002\u9009\u62E9\u5668\u7528\u7A33\u5B9A aria \u5C5E\u6027\uFF0C
   \u4E0D\u4F9D\u8D56\u6613\u788E\u7684 CSS-Module \u54C8\u5E0C class\u3002 */
[role="presentation"]:has(> [role="dialog"]) {
  z-index: 9999 !important;
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
function installAppearanceCss() {
  if (document.querySelector(`style[data-plugin-css="${CSS_ID}"]`)) return;
  const style = document.createElement("style");
  style.dataset.plugin = "dsh-appearance";
  style.dataset.pluginCss = CSS_ID;
  style.textContent = APPEARANCE_CSS;
  document.head.appendChild(style);
}
var CONVERSATION_CSS_ID = "dsh-appearance/conversation-readability.css";
var CONVERSATION_READABILITY_CSS = `
[data-chat-flow-kind="assistant-step"] p { margin: 0 0 12px; }
[data-chat-flow-kind="assistant-step"] p:last-child { margin-bottom: 0; }
[data-chat-flow-kind="assistant-step"] h1,
[data-chat-flow-kind="assistant-step"] h2,
[data-chat-flow-kind="assistant-step"] h3,
[data-chat-flow-kind="assistant-step"] h4 { margin: 18px 0 10px; line-height: 1.4; }
[data-chat-flow-kind="assistant-step"] ul,
[data-chat-flow-kind="assistant-step"] ol { margin: 0 0 12px; padding-left: 22px; }
[data-chat-flow-kind="assistant-step"] li { margin: 4px 0; }

/* \u8868\u683C\u6E32\u67D3\u4F18\u5316\uFF1A\u7528\u7EC4\u5408\u9009\u62E9\u5668\uFF0C\u9632\u6B62 data-chat-flow-kind \u4E0D\u5728\u7956\u5148\u4E0A\u65F6\u5931\u6548\u3002
   _markdown_ / _tableScroll_ \u662F CSS-Module \u524D\u7F00\uFF0C\u4F1A\u968F\u6784\u5EFA\u53D8 hash\uFF0C\u4F46\u524D\u7F00\u7A33\u5B9A\u3002 */
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

[data-chat-flow-kind] button[aria-label="\u590D\u5236"] {
  opacity: 0;
  transition: opacity .15s ease;
}
[data-chat-flow-kind]:hover button[aria-label="\u590D\u5236"],
[data-chat-flow-kind] button[aria-label="\u590D\u5236"]:focus-visible {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  pre.shiki,
  [data-chat-flow-kind] button[aria-label="\u590D\u5236"] { transition: none; }
}
`;
function setConversationReadability(enabled) {
  const existing = document.querySelector(`style[data-plugin-css="${CONVERSATION_CSS_ID}"]`);
  if (enabled && !existing) {
    const style = document.createElement("style");
    style.dataset.plugin = "dsh-appearance";
    style.dataset.pluginCss = CONVERSATION_CSS_ID;
    style.textContent = CONVERSATION_READABILITY_CSS;
    document.head.appendChild(style);
    startTableObserver();
  } else if (!enabled && existing) {
    existing.remove();
    stopTableObserver();
    document.querySelectorAll('[data-chat-flow-kind="assistant-step"] tbody td.dsh-tbl-center').forEach((td) => td.classList.remove("dsh-tbl-center"));
  }
}
function isCenterableCell(td) {
  const text = (td.textContent || "").trim();
  if (!text) return false;
  if (text.includes("\n")) return false;
  if (/^[\d,.\-+/$¥€£%\s×÷:]+$/.test(text) && /\d/.test(text)) return true;
  if (text.length <= 4 && !/\s/.test(text)) return true;
  return false;
}
function alignTableCells(root = document) {
  const tables = root.querySelectorAll('[data-chat-flow-kind="assistant-step"] table');
  tables.forEach((table) => {
    table.querySelectorAll("tbody td").forEach((td) => {
      if (isCenterableCell(td)) td.classList.add("dsh-tbl-center");
      else td.classList.remove("dsh-tbl-center");
    });
  });
}
var tableObserver = null;
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

// packages/extension/dsh-appearance/src/client/raise.js
var INTERACTIVE_SELECTOR = [
  "button",
  "a",
  "input",
  "textarea",
  "select",
  '[role="button"]',
  "[tabindex]",
  "[contenteditable]",
  "[onclick]",
  "[onmousedown]",
  '[class*="tab"]',
  '[class*="btn"]',
  '[class*="Button"]',
  '[class*="icon"]',
  '[class*="crumb"]',
  '[class*="menu"]',
  '[class*="dropdown"]',
  '[class*="close"]'
].join(",");
var RAISED_CLASS = "dsh-drag-raised";
var STYLE_ID = "dsh-drag-strip-raise-style";
function getStrip() {
  return document.getElementById("dsh-drag-strip");
}
function ensureRaiseStyle() {
  const css = "." + RAISED_CLASS + ' { z-index: 200 !important; }[class*="tabBar"] { position: relative !important; z-index: 200 !important; }[class*="sessionLogButton"] { position: relative !important; z-index: 200 !important; }[class*="settings"]:not([class*="Button"]):not([class*="button"]):not([class*="icon"]):not([class*="Icon"]):not([class*="trigger"]):not([class*="Trigger"]):not([class*="tab"]):not([class*="Tab"]) { z-index: 9999 !important; }.shlrail_fixed { z-index: 201 !important; }.shlrail_tooltip { z-index: 202 !important; }';
  const existing = document.getElementById(STYLE_ID);
  if (existing) {
    if (!existing.textContent.includes(".shlrail_fixed")) {
      existing.textContent = css;
    }
    return;
  }
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
function overlapsStrip(el) {
  const strip = getStrip();
  if (!strip) return false;
  const sr = strip.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && r.top < sr.bottom && r.bottom > sr.top && r.left < sr.right && r.right > sr.left && r.top < window.innerHeight && r.bottom > 0;
}
function raiseAncestors(el) {
  let target = null;
  let anc = el.parentElement;
  while (anc && anc !== document.body && anc !== document.documentElement) {
    if (anc.classList.contains(RAISED_CLASS)) {
      return;
    }
    const st2 = getComputedStyle(anc);
    const z = parseInt(st2.zIndex, 10);
    if (st2.position !== "static" && !Number.isNaN(z) && z >= 100) {
      return;
    }
    if (Number.isNaN(z) || z < 200) {
      target = { el: anc, st: st2 };
    }
    anc = anc.parentElement;
  }
  if (target) {
    if (target.st.position === "static") {
      target.el.style.position = "relative";
      target.el.dataset.dshStaticRaised = "1";
    }
    target.el.classList.add(RAISED_CLASS);
    return;
  }
  const st = getComputedStyle(el);
  if (st.position === "static") el.style.position = "relative";
  el.style.zIndex = "200";
  el.dataset.dshRaised = "1";
}
function apply() {
  const strip = getStrip();
  if (!strip) return;
  ensureRaiseStyle();
  for (const el of document.querySelectorAll(INTERACTIVE_SELECTOR)) {
    try {
      if (!overlapsStrip(el)) continue;
      el.style.setProperty("-webkit-app-region", "no-drag");
      raiseAncestors(el);
    } catch (e) {
    }
  }
}
function installRaiseOverlay() {
  if (document.body.dataset.dshAppearanceRaise === "1") return;
  document.body.dataset.dshAppearanceRaise = "1";
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
    attributeFilter: ["class", "style"]
  });
  window.addEventListener("resize", schedule);
  setInterval(apply, 1500);
}

// packages/extension/dsh-appearance/src/client/modalRaise.js
var DIALOG_SELECTOR = '[role="dialog"]';
var RAISED_FLAG = "dshModalRaised";
var TOP_Z = "9999";
function isOverlayLike(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  const pos = getComputedStyle(el).position;
  return pos === "fixed" || pos === "absolute";
}
function raiseOverlayFor(dialog) {
  let root = dialog;
  while (root.parentElement && root.parentElement !== document.body && root.parentElement !== document.documentElement) {
    root = root.parentElement;
  }
  if (!isOverlayLike(root)) return;
  if (root.dataset[RAISED_FLAG] === "1") return;
  root.dataset[RAISED_FLAG] = "1";
  root.style.setProperty("z-index", TOP_Z, "important");
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
function installModalRaise() {
  if (document.body.dataset.dshAppearanceModalRaise === "1") return;
  document.body.dataset.dshAppearanceModalRaise = "1";
  scan(document.body);
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        scan(node);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
}

// packages/extension/dsh-appearance/src/client/sidebar-order.js
var CSS_ID2 = "dsh-appearance/sidebar-order.css";
function applySidebarOffset(cfg) {
  const style = document.querySelector(`style[data-plugin-css="${CSS_ID2}"]`);
  const offset = cfg?.sidebarOffset;
  if (typeof offset !== "number" || !(offset > 0)) {
    style?.remove();
    return;
  }
  const px = Math.round(offset);
  const css = `.hHd-Xa_root { margin-top: ${px}px; height: calc(100% - ${px}px); }`;
  if (style) {
    style.textContent = css;
    return;
  }
  const el = document.createElement("style");
  el.dataset.plugin = "dsh-appearance";
  el.dataset.pluginCss = CSS_ID2;
  el.textContent = css;
  document.head.appendChild(el);
}

// packages/extension/dsh-appearance/src/client/background.js
var CSS_ID3 = "dsh-appearance/background.css";
var BG_STORE_KEY = "dsh-appearance:backgroundImage";
function readStoredImage() {
  try {
    if (typeof localStorage === "undefined") return null;
    const raw = localStorage.getItem(BG_STORE_KEY);
    return typeof raw === "string" && raw.startsWith("data:image") ? raw : null;
  } catch {
    return null;
  }
}
function applyBackground(cfg) {
  const style = document.querySelector(`style[data-plugin-css="${CSS_ID3}"]`);
  const enabled = cfg?.backgroundImage === true;
  const raw = enabled ? readStoredImage() : null;
  if (!raw) {
    if (style) style.remove();
    document.body.classList.remove("dsh-appearance-bg");
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
  document.body.classList.add("dsh-appearance-bg");
  if (style) {
    style.textContent = css;
    return;
  }
  const el = document.createElement("style");
  el.dataset.plugin = "dsh-appearance";
  el.dataset.pluginCss = CSS_ID3;
  el.textContent = css;
  document.head.appendChild(el);
}

// packages/extension/dsh-appearance/src/client/settings.jsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function useSnapshot(scope) {
  const [cfg, setCfg] = (0, import_react.useState)(() => scope.getSnapshot().value ?? {});
  (0, import_react.useEffect)(() => scope.subscribe(() => {
    setCfg(scope.getSnapshot().value ?? {});
  }), [scope]);
  return cfg;
}
function useScopeSet(scope, cfg) {
  return (field, value) => {
    if (value === void 0) scope.unset(field);
    else scope.set(field, value);
  };
}
function presetSwatch(preset) {
  const light = preset.light ?? {};
  return [
    light["--dsw-alias-bg-base"],
    light["--dsw-alias-brand-primary"],
    light["--dsw-specific-sidebar-fill"]
  ];
}
var MAX_EDGE = 1920;
function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read failed"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("decode failed"));
      img.onload = () => {
        let { width, height } = img;
        const scale = Math.min(1, MAX_EDGE / Math.max(width, height));
        width = Math.round(width * scale);
        height = Math.round(height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
function AppearanceSection({ t, scope }) {
  const cfg = useSnapshot(scope);
  const set = useScopeSet(scope, cfg);
  const fileRef = (0, import_react.useRef)(null);
  const [busy, setBusy] = (0, import_react.useState)(false);
  const onPick = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setBusy(true);
    try {
      const dataUrl = await compressImage(file);
      try {
        localStorage.setItem(BG_STORE_KEY, dataUrl);
        set("backgroundImage", true);
      } catch (e) {
        console.warn("[dsh-appearance] background image too large for localStorage, skipped", e);
      }
    } catch (error) {
      console.warn("[dsh-appearance] background image failed", error);
    } finally {
      setBusy(false);
    }
  };
  const mask = cfg.backgroundMaskOpacity ?? 70;
  const storedImage = (() => {
    try {
      return localStorage.getItem(BG_STORE_KEY);
    } catch {
      return null;
    }
  })();
  const hasImage = cfg.backgroundImage === true && typeof storedImage === "string" && storedImage.startsWith("data:image");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh-appearance-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("section.preset") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsh-appearance-preset-grid", children: Object.entries(PRESET_THEMES).map(([id, preset]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => set("themePreset", id),
        className: id === (cfg.themePreset ?? "default") ? "dsh-appearance-active" : "",
        "aria-pressed": id === (cfg.themePreset ?? "default"),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh-appearance-swatch", children: presetSwatch(preset).map((color, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { backgroundColor: color } }, index)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(preset.labelKey) })
        ]
      },
      id
    )) }),
    cfg.themePreset && cfg.themePreset !== "default" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh-appearance-action", onClick: () => set("themePreset", "default"), children: t("preset.reset") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("sidebar.layout") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh-appearance-sidebar-offset", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh-appearance-sidebar-offset-label", htmlFor: "dsh-appearance-sidebar-offset", children: t("sidebar.offsetLabel") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          id: "dsh-appearance-sidebar-offset",
          type: "range",
          min: "0",
          max: "200",
          step: "1",
          value: cfg.sidebarOffset ?? 0,
          onChange: (event) => set("sidebarOffset", Number(event.target.value))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "dsh-appearance-sidebar-offset-value", children: [
        cfg.sidebarOffset ?? 0,
        "px"
      ] })
    ] }),
    (cfg.sidebarOffset ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh-appearance-action", onClick: () => scope.unset("sidebarOffset"), children: t("sidebar.reset") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("background.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        ref: fileRef,
        type: "file",
        accept: "image/*",
        style: { display: "none" },
        onChange: onPick
      }
    ),
    hasImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh-appearance-background", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "dsh-appearance-background-preview", src: storedImage, alt: "" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsh-appearance-background-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh-appearance-action", onClick: () => fileRef.current?.click(), children: t("background.replace") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh-appearance-action", onClick: () => {
          try {
            localStorage.removeItem(BG_STORE_KEY);
          } catch {
          }
          scope.unset("backgroundImage");
        }, children: t("background.remove") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "dsh-appearance-mask-label", htmlFor: "dsh-appearance-mask", children: t("background.maskLabel") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          id: "dsh-appearance-mask",
          type: "range",
          min: "0",
          max: "100",
          step: "1",
          value: mask,
          onChange: (event) => set("backgroundMaskOpacity", Number(event.target.value))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "dsh-appearance-mask-value", children: [
        mask,
        "%"
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsh-appearance-action", disabled: busy, onClick: () => fileRef.current?.click(), children: busy ? t("background.processing") : t("background.upload") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("section.conversation") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dsh-appearance-switch-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        t("conversation.toggle"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dsh-appearance-switch-desc", children: t("conversation.desc") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: "checkbox",
          className: "dsh-appearance-switch",
          checked: !!cfg.conversationReadability,
          onChange: (event) => set("conversationReadability", event.target.checked)
        }
      )
    ] })
  ] });
}

// packages/extension/dsh-appearance/src/client/locales.js
var zh = {
  "section.preset": "\u9884\u8BBE\u4E3B\u9898",
  "preset.default": "\u539F\u751F",
  "preset.minimal": "\u6781\u7B80\u9ED1\u767D",
  "preset.violet": "\u6697\u591C\u7D2B",
  "preset.forest": "\u62A4\u773C\u7EFF",
  "preset.amber": "\u6696\u68D5",
  "preset.reset": "\u6062\u590D\u9ED8\u8BA4\u4E3B\u9898",
  "sidebar.layout": "\u4FA7\u8FB9\u680F\u5E03\u5C40",
  "sidebar.offsetLabel": "\u8DDD\u9876\u90E8\u8DDD\u79BB",
  "sidebar.reset": "\u6062\u590D\u539F\u751F\u5E03\u5C40",
  "background.title": "\u80CC\u666F\u56FE\u7247",
  "background.upload": "\u4E0A\u4F20\u80CC\u666F\u56FE",
  "background.replace": "\u66F4\u6362\u80CC\u666F\u56FE",
  "background.remove": "\u79FB\u9664\u80CC\u666F\u56FE",
  "background.processing": "\u5904\u7406\u4E2D\u2026",
  "background.maskLabel": "\u906E\u7F69\u4E0D\u900F\u660E\u5EA6",
  "section.conversation": "\u4F1A\u8BDD\u53EF\u8BFB\u6027",
  "conversation.toggle": "\u4F18\u5316\u8868\u683C / \u4EE3\u7801 / \u5F15\u7528",
  "conversation.desc": "\u8868\u683C\u52A0\u5706\u89D2\u4E0E\u8868\u5934\u8272\u6761\u3001\u6570\u503C\u5355\u5143\u683C\u81EA\u52A8\u5C45\u4E2D\uFF0C\u4EE3\u7801\u5757\u63CF\u8FB9\uFF0C\u5F15\u7528\u52A0\u8272\u6761"
};
var en = {
  "section.preset": "Preset themes",
  "preset.default": "Default",
  "preset.minimal": "Minimal",
  "preset.violet": "Violet Night",
  "preset.forest": "Forest",
  "preset.amber": "Amber",
  "preset.reset": "Reset to default theme",
  "sidebar.layout": "Sidebar layout",
  "sidebar.offsetLabel": "Distance from top",
  "sidebar.reset": "Restore native layout",
  "background.title": "Background image",
  "background.upload": "Upload background",
  "background.replace": "Replace",
  "background.remove": "Remove",
  "background.processing": "Processing\u2026",
  "background.maskLabel": "Mask opacity",
  "section.conversation": "Conversation readability",
  "conversation.toggle": "Polish tables / code / quotes",
  "conversation.desc": "Rounded tables with header color bar, auto-center numeric cells, outline code blocks, color-bar quotes"
};

// packages/extension/dsh-appearance/src/client/index.jsx
var NS = "appearance";
var SETTINGS_NAMESPACE = "dsh-appearance";
var inject = [
  "slots",
  "locale",
  "theme",
  "settingsScope",
  "connection",
  "remote"
];
function apply2(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "dsh-appearance: dictionaries");
  const t = ctx.locale.bind(NS);
  installAppearanceCss();
  installRaiseOverlay();
  installModalRaise();
  const scope = ctx.settingsScope.bind({ namespace: SETTINGS_NAMESPACE });
  const themeEngine = createThemeEngine(ctx, scope);
  const injected = () => ({ t, scope, themeEngine });
  const refresh = () => {
    themeEngine.apply();
    const cfg = scope.getSnapshot().value ?? {};
    applySidebarOffset(cfg);
    applyBackground(cfg);
    setConversationReadability(!!cfg.conversationReadability);
    if (cfg.sidebarOrder || cfg.sidebarPositions) queueMicrotask(() => {
      if (cfg.sidebarOrder) scope.unset("sidebarOrder");
      if (cfg.sidebarPositions) scope.unset("sidebarPositions");
    });
  };
  ctx.effect(() => scope.subscribe(refresh), "dsh-appearance: settings watcher");
  refresh();
  ctx.slots.inject("settings.general.item", () => ctx.slots.register({
    name: "settings.general.item",
    id: "dsh-appearance",
    order: 11,
    locale: NS,
    inject: injected
  }, AppearanceSection));
}

		return module.exports;
	}
});