import type { FC } from 'react';
import React from 'react';

import { Divider } from '@/assets/icons/Divider.tsx';
import { Moon } from '@/assets/icons/Moon.tsx';
import { Sun } from '@/assets/icons/Sun.tsx';
import { getCurrentTheme } from '@/helpers/get-current-theme.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './ThemesSelector.module.css';

interface ThemesSelectorProps {
    setTheme: (theme: Themes) => void;
}

export const ThemesSelector: FC<ThemesSelectorProps> = ({ setTheme }) => {
    const theme = getCurrentTheme();

    return (
        <div className={styles.themes}>
            <button className={styles.moonIcon} onClick={() => setTheme('dark')}>
                <Moon theme={theme} />
            </button>
            <div className={styles.verticalDivider}>
                <Divider theme={theme} />
            </div>
            <button className={styles.sunIcon} onClick={() => setTheme('light')}>
                <Sun theme={theme} />
            </button>
        </div>
    );
};
