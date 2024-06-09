import type { FC } from 'react';

import { categories } from '@/constants/products-categories.constant.ts';

import styles from './ProductsCategories.module.css';

interface ProductsCategoriesProps {
    handleCategoryFilter: (category: string) => void;
    selectedCategories: Set<string>;
}

export const ProductsCategories: FC<ProductsCategoriesProps> = ({ handleCategoryFilter, selectedCategories }) => (
    <div className={styles.categoriesFilter}>
        {categories.map((category) => (
            <button
                className={selectedCategories.has(category) ? styles.categoryButtonActive : styles.categoryButton}
                key={category}
                onClick={() => handleCategoryFilter(category)}
            >
                {category}
            </button>
        ))}
    </div>
);
