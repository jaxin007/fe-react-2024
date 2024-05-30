import { useState } from 'react';

import { images } from '@/constants/images.constant.ts';

import styles from './SearchProductsForm.module.css';

export const SearchProductsForm = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            <div className={styles.searchProductsWrapper}>
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
            </div>
        </>
    );
};
