import React from 'react';

import type { Themes } from '@/types/themes.type.ts';

interface DividerProps {
    theme: Themes;
}

export const Divider: React.FC<DividerProps> = ({ theme }) => (
    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7V27" stroke="#656565" />
    </svg>
);
