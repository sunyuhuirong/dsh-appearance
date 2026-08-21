import { createThemeEngine } from './theme.js';
import { installAppearanceCss } from './style.js';
import { installRaiseOverlay } from './raise.js';
import { installModalRaise } from './modalRaise.js';
import { applySidebarOffset } from './sidebar-order.js';
import { setConversationReadability } from './style.js';
import { applyBackground } from './background.js';
import { AppearanceSection } from './settings.jsx';
import { zh, en } from './locales.js';

const NS = 'appearance';
const SETTINGS_NAMESPACE = 'dsh-appearance';

const inject = [
  'slots',
  'locale',
  'theme',
  'settingsScope',
  'connection',
  'remote'
];

function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-appearance: dictionaries');
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
      if (cfg.sidebarOrder) scope.unset('sidebarOrder');
      if (cfg.sidebarPositions) scope.unset('sidebarPositions');
    });
  };

  ctx.effect(() => scope.subscribe(refresh), 'dsh-appearance: settings watcher');

  refresh();

  ctx.slots.inject('settings.general.item', () => ctx.slots.register({
    name: 'settings.general.item',
    id: 'dsh-appearance',
    order: 11,
    locale: NS,
    inject: injected
  }, AppearanceSection));
}

export { apply, inject };
