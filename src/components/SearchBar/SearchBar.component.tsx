import type { FC } from 'react';

import { ProductsCategories } from '@/components/ProductsCategories/ProductsCategories.component.tsx';
import { ProductsDropdownFilter } from '@/components/ProductsDropdownFilter/ProductsDropdownFilter.component.tsx';
import { SearchProductsForm } from '@/components/SearchProductsForm/SearchProductsForm.component.tsx';
import type { Themes } from '@/types/themes.type.ts';

import styles from './SearchBar.module.css';

interface SearchBarProps {
    theme: Themes;
}

const SearchBar: FC<SearchBarProps> = ({ theme }) => (
    <div className={styles.searchBar}>
        <div className={styles.searchBarWrapper}>
            <SearchProductsForm />

            <div className={styles.searchBarRight}>
                <ProductsCategories />

                <ProductsDropdownFilter theme={theme} />
            </div>
        </div>
    </div>
);

export default SearchBar;
