import type { FC } from 'react';
import { useState } from 'react';

import { ArrowDown } from '@/assets/icons/ArrowDown.tsx';
import { sortOptions } from '@/constants/sort-options.constant.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './ProductsDropdownFilter.module.css';

interface ProductsDropdownFilterProps {
    theme: Themes;
}

export const ProductsDropdownFilter: FC<ProductsDropdownFilterProps> = ({ theme }) => {
    const [sortOption, setSortOption] = useState<string>(sortOptions[0]);
    const [isSortOptionsOpen, setIsSortOptionsOpen] = useState<boolean>(false);

    const handleSortOptionsOpen = (option: boolean) => {
        setIsSortOptionsOpen(option);
    };

    const handleSort = (option: string) => {
        setSortOption(option);
    };

    return (
        <div className={styles.sortOptions}>
            <span className={styles.sortSpan}>Sort by:</span>
            <div className={styles.dropdownWrapper}>
                <button className={styles.dropdownBtn} onClick={() => handleSortOptionsOpen(!isSortOptionsOpen)}>
                    <span className={styles.dropdownBtnText}>{sortOption}</span>
                    <ArrowDown theme={theme} />
                </button>
                {isSortOptionsOpen && (
                    <div className={styles.dropdownContent}>
                        {sortOptions.map((option) => (
                            <button
                                className={sortOption === option ? styles.dropdownOptionActive : styles.dropdownOption}
                                key={option}
                                onClick={() => {
                                    handleSort(option);
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
