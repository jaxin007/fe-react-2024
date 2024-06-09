import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { ProductsCategories } from '@/components/ProductsCategories/ProductsCategories.component.tsx';
import { ProductsDropdownFilter } from '@/components/ProductsDropdownFilter/ProductsDropdownFilter.component.tsx';
import { SearchProductsForm } from '@/components/SearchProductsForm/SearchProductsForm.component.tsx';
import { sortOptions } from '@/constants/sort-options.constant.ts';
import type { Product } from '@/models/product.model.ts';
import type { SortOptions } from '@/types/sort-options.type.ts';
import type { Themes } from '@/types/themes.type.ts';
import { filterProducts } from '@/utils/filter-products.ts';
import { sortProducts } from '@/utils/sort-products.ts';

import styles from './SearchBar.module.css';

interface SearchBarProps {
    theme: Themes;
    products: Product[];
    handleProductsFilter: (products: Product[]) => void;
}

const SearchBar: FC<SearchBarProps> = ({ theme, products, handleProductsFilter }) => {
    const [sortOption, setSortOption] = useState<SortOptions>(sortOptions[0]);
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSortOption = (option: SortOptions) => {
        setSortOption(option);
    };

    const handleCategoryFilter = (category: string) => {
        setSelectedCategories((previousCategories) => {
            const newCategories = new Set(previousCategories);

            if (newCategories.has(category)) {
                newCategories.delete(category);
            } else {
                newCategories.add(category);
            }

            return newCategories;
        });
    };

    const handleSearchQuery = (query: string) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        const filteredProducts = filterProducts(products, selectedCategories, searchQuery);

        const sortedProducts = sortProducts(filteredProducts, sortOption);

        handleProductsFilter(sortedProducts);
    }, [sortOption, selectedCategories, searchQuery]);

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBarWrapper}>
                <SearchProductsForm handleSearchQuery={handleSearchQuery} searchQuery={searchQuery} />

                <div className={styles.searchBarRight}>
                    <ProductsCategories selectedCategories={selectedCategories} handleCategoryFilter={handleCategoryFilter} />

                    <ProductsDropdownFilter theme={theme} handleSortOption={handleSortOption} sortOption={sortOption} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
