import type { Themes } from '@/types/themes.type.ts';

export const getCurrentTheme = (): Themes => {
    // Get preferred theme from local storage
    const currentTheme = localStorage.getItem('theme') as Themes;

    if (currentTheme) {
        return currentTheme;
    }

    const isDeviceInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme: Themes = isDeviceInDarkMode ? 'dark' : 'light';

    // Save preferred theme to local storage
    localStorage.setItem('theme', theme);

    return theme;
};
