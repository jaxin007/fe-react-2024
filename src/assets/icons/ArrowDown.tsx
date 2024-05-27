import type { FC } from 'react';

import type { Themes } from '@/types/themes.type.ts';

interface ArrowDownProps {
    theme: Themes;
}

export const ArrowDown: FC<ArrowDownProps> = ({ theme }) => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 1.5L4 4.5L1 1.5"
            stroke={theme === 'dark' ? '#FFF' : '#656565'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
