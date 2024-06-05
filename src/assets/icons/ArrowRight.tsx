import type { FC } from 'react';

import type { Themes } from '@/types/themes.type.ts';

interface ArrowRightProps {
    theme: Themes;
    isActive: boolean;
}

export const ArrowRight: FC<ArrowRightProps> = ({ isActive, theme }) => (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.25 1.08337L4.16667 4.00004L1.25 6.91671"
            stroke={isActive ? (theme === 'dark' ? '#FFF' : '#111') : '#CCC'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
