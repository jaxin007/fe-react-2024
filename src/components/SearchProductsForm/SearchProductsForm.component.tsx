import type { FC } from 'react';

import { images } from '@/constants/images.constant.ts';

import styles from './SearchProductsForm.module.css';

interface SearchProductsFormProps {
    searchQuery: string;
    handleSearchQuery: (searchQuery: string) => void;
}

export const SearchProductsForm: FC<SearchProductsFormProps> = ({ handleSearchQuery, searchQuery }) => (
    <>
        <div className={styles.searchProductsWrapper}>
            <input
                type="text"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(event) => handleSearchQuery(event.target.value)}
                placeholder="Search..."
            ></input>
            <button className={styles.searchButton}>
                <img src={images.searchIcon} alt="search" />
            </button>
        </div>
    </>
);
