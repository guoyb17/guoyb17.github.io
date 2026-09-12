(() => {
  'use strict';

  const storageKey = 'yuanbo-guo-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  const colors = { light: '#fcfcfb', dark: '#151b23' };

  function readPreference() {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === 'light' || saved === 'dark' ? saved : 'system';
    } catch {
      return 'system';
    }
  }

  let preference = readPreference();

  function applyTheme() {
    const theme = preference === 'system'
      ? (systemTheme.matches ? 'dark' : 'light')
      : preference;

    root.dataset.theme = theme;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = colors[theme];
    });
    document.querySelectorAll('input[name="color-theme"]').forEach((input) => {
      input.checked = input.value === preference;
    });
  }

  // Run before the stylesheet to avoid flashing the wrong saved theme.
  applyTheme();

  function followSystem() {
    if (preference === 'system') applyTheme();
  }

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener('change', followSystem);
  } else {
    systemTheme.addListener(followSystem);
  }

  window.addEventListener('storage', (event) => {
    if (event.key === storageKey || event.key === null) {
      preference = readPreference();
      applyTheme();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('[data-theme-switcher]');
    if (!switcher) return;

    applyTheme();
    switcher.addEventListener('change', (event) => {
      const input = event.target;
      if (!input.matches('input[name="color-theme"]')) return;
      if (!['system', 'light', 'dark'].includes(input.value)) return;

      preference = input.value;
      applyTheme();

      try {
        if (preference === 'system') {
          localStorage.removeItem(storageKey);
        } else {
          localStorage.setItem(storageKey, preference);
        }
      } catch {
        // The switch still works when browser storage is unavailable.
      }
    });
    switcher.hidden = false;
  });
})();
