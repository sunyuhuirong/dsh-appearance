import { useEffect, useRef, useState } from 'react';
import { PRESET_THEMES } from './tokens.js';
import { BG_STORE_KEY } from './background.js';

function useSnapshot(scope) {
  const [cfg, setCfg] = useState(() => scope.getSnapshot().value ?? {});
  useEffect(() => scope.subscribe(() => {
    setCfg(scope.getSnapshot().value ?? {});
  }), [scope]);
  return cfg;
}

function useScopeSet(scope, cfg) {
  return (field, value) => {
    if (value === undefined) scope.unset(field);
    else scope.set(field, value);
  };
}

function presetSwatch(preset) {
  const light = preset.light ?? {};
  return [
    light['--dsw-alias-bg-base'],
    light['--dsw-alias-brand-primary'],
    light['--dsw-specific-sidebar-fill']
  ];
}

/**
 * 把用户选中的图片读成 data URL，并压缩到长边 ≤ MAX_EDGE，控制 settings.yaml 体积。
 */
const MAX_EDGE = 1920;

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read failed'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('decode failed'));
      img.onload = () => {
        let { width, height } = img;
        const scale = Math.min(1, MAX_EDGE / Math.max(width, height));
        width = Math.round(width * scale);
        height = Math.round(height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

export function AppearanceSection({ t, scope }) {
  const cfg = useSnapshot(scope);
  const set = useScopeSet(scope, cfg);
  const fileRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const onPick = async (event) => {
    if (busy) return; // 防重入：压缩中不再响应新选择
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusy(true);
    try {
      const dataUrl = await compressImage(file);
      try {
        localStorage.setItem(BG_STORE_KEY, dataUrl);
        set('backgroundImage', true);
      } catch (e) {
        console.warn('[dsh-appearance] background image too large for localStorage, skipped', e);
      }
    } catch (error) {
      console.warn('[dsh-appearance] background image failed', error);
    } finally {
      setBusy(false);
    }
  };

  const mask = cfg.backgroundMaskOpacity ?? 70;
  const storedImage = (() => { try { return localStorage.getItem(BG_STORE_KEY); } catch { return null; } })();
  const hasImage = cfg.backgroundImage === true && typeof storedImage === 'string' && storedImage.startsWith('data:image');

  return (
    <div className="dsh-appearance-section">
      <h3>{t('section.preset')}</h3>
      <div className="dsh-appearance-preset-grid">
        {Object.entries(PRESET_THEMES).map(([id, preset]) => (
          <button
            key={id}
            type="button"
            onClick={() => set('themePreset', id)}
            className={id === (cfg.themePreset ?? 'default') ? 'dsh-appearance-active' : ''}
            aria-pressed={id === (cfg.themePreset ?? 'default')}
          >
            <span className="dsh-appearance-swatch">
              {presetSwatch(preset).map((color, index) => (
                <i key={index} style={{ backgroundColor: color }} />
              ))}
            </span>
            <span>{t(preset.labelKey)}</span>
          </button>
        ))}
      </div>

      <h3>{t('background.title')}</h3>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onPick}
      />
      {hasImage ? (
        <div className="dsh-appearance-background">
          <img className="dsh-appearance-background-preview" src={storedImage} alt="" />
          <div className="dsh-appearance-background-actions">
            <button type="button" className="dsh-appearance-action" onClick={() => fileRef.current?.click()}>
              {t('background.replace')}
            </button>
            <button type="button" className="dsh-appearance-action" onClick={() => {
              try { localStorage.removeItem(BG_STORE_KEY); } catch {}
              scope.unset('backgroundImage');
            }}>
              {t('background.remove')}
            </button>
          </div>
          <label className="dsh-appearance-mask-label" htmlFor="dsh-appearance-mask">
            {t('background.maskLabel')}
          </label>
          <input
            id="dsh-appearance-mask"
            type="range"
            min="0"
            max="100"
            step="1"
            value={mask}
            onChange={(event) => set('backgroundMaskOpacity', Number(event.target.value))}
          />
          <span className="dsh-appearance-mask-value">{mask}%</span>
        </div>
      ) : (
        <button type="button" className="dsh-appearance-action" disabled={busy} onClick={() => fileRef.current?.click()}>
          {busy ? t('background.processing') : t('background.upload')}
        </button>
      )}

      <div className="dsh-appearance-divider" />
      <h3>{t('sidebar.layout')}</h3>
      <div className="dsh-appearance-sidebar-offset">
        <label className="dsh-appearance-sidebar-offset-label" htmlFor="dsh-appearance-sidebar-offset">
          {t('sidebar.offsetLabel')}
        </label>
        <input
          id="dsh-appearance-sidebar-offset"
          type="range"
          min="0"
          max="200"
          step="1"
          value={cfg.sidebarOffset ?? 0}
          onChange={(event) => set('sidebarOffset', Number(event.target.value))}
        />
        <span className="dsh-appearance-sidebar-offset-value">{(cfg.sidebarOffset ?? 0)}px</span>
      </div>

      <label className="dsh-appearance-switch-row">
        <span>
          {t('sidebar.folderIconToggle')}
          <span className="dsh-appearance-switch-desc">{t('sidebar.folderIconDesc')}</span>
        </span>
        <input
          type="checkbox"
          className="dsh-appearance-switch"
          checked={cfg.stableProjectFolderIcon !== false}
          onChange={(event) => set('stableProjectFolderIcon', event.target.checked)}
        />
      </label>

      <label className="dsh-appearance-switch-row">
        <span>
          {t('sidebar.iconAlignToggle')}
          <span className="dsh-appearance-switch-desc">{t('sidebar.iconAlignDesc')}</span>
        </span>
        <input
          type="checkbox"
          className="dsh-appearance-switch"
          checked={cfg.alignSidebarIcons !== false}
          onChange={(event) => set('alignSidebarIcons', event.target.checked)}
        />
      </label>

      <div className="dsh-appearance-divider" />
      <label className="dsh-appearance-switch-row">
        <span>
          {t('conversation.toggle')}
          <span className="dsh-appearance-switch-desc">{t('conversation.desc')}</span>
        </span>
        <input
          type="checkbox"
          className="dsh-appearance-switch"
          checked={!!cfg.conversationReadability}
          onChange={(event) => set('conversationReadability', event.target.checked)}
        />
      </label>
    </div>
  );
}
