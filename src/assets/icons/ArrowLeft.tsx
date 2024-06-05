import type { FC } from 'react';

import type { Themes } from '@/types/themes.type.ts';

interface ArrowLeftProps {
    theme: Themes;
    isActive: boolean;
}

export const ArrowLeft: FC<ArrowLeftProps> = ({ isActive, theme }) => (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.74967 6.91671L0.833008 4.00004L3.74967 1.08337"
            stroke={isActive ? (theme === 'dark' ? '#FFF' : '#111') : '#CCC'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
