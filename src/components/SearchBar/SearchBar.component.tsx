import type { FC } from 'react';
import { useState } from 'react';

import { ArrowDown } from '@/assets/icons/ArrowDown.tsx';
import { images } from '@/constants/images.constant.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './SearchBar.module.css';

const categories = ['Electronics', 'Shoes', 'Clothes'] as const;

const sortOptions = ['Price (Low-High)', 'Newest', 'Oldest'] as const;

interface SearchBarProps {
    theme: Themes;
}

const SearchBar: FC<SearchBarProps> = ({ theme }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [sortOption, setSortOption] = useState<string>(sortOptions[0]);
    const [isSortOptionsOpen, setIsSortOptionsOpen] = useState<boolean>(false);

    // const handleSearch = () => {
    // handle search
    // };

    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(category);
    };

    const handleSortOptionsOpen = (option: boolean) => {
        setIsSortOptionsOpen(option);
    };

    const handleSort = (option: string) => {
        setSortOption(option);
    };

    return (
        <div className={styles.searchBar}>
            <form className={styles.searchForm}>
                <input
                    type="text"
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search..."
                ></input>
                <button className={styles.searchButton}>
                    <img src={images.searchIcon} alt="search" />
                </button>
            </form>

            <div className={styles.searchBarRight}>
                <div className={styles.categoriesFilter}>
                    {categories.map((category) => (
                        <button
                            className={selectedCategory === category ? styles.categoryButtonActive : styles.categoryButton}
                            key={category}
                            onClick={() => handleCategoryFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.sortOptions}>
                    <span className={styles.sortSpan}>Sort by:</span>
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
        </div>
    );
};

export default SearchBar;
