import { useState } from 'react';

import { categories } from '@/constants/products-categories.constant.ts';

import styles from './ProductsCategories.module.css';

export const ProductsCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>();

    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(category);
    };

    return (
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
    );
};
