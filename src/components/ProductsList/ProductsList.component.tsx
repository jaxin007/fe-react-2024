import React, { useState } from 'react';

import { ProductCard } from '@/components/ProductCard/ProductCard.component.tsx';
import { products } from '@/constants/products.constant.ts';
import type { Product } from '@/models/product.model.ts';
import type { Cart } from '@/types/cart.type.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './ProductsList.module.css';

interface ProductProps {
    updateTotalCart: () => void;
    theme: Themes;
}

export const ProductList: React.FC<ProductProps> = ({ updateTotalCart, theme }) => {
    const initialProductIds = localStorage.getItem('cart') || '{}';
    const [productsCart, setProductsCart] = useState<Cart>(initialProductIds ? JSON.parse(initialProductIds) : {});

    return (
        <div className={styles.mainGridWrapper}>
            <div className={styles.grid}>
                {products.map((item: Product) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onCartChange={updateTotalCart}
                        productsCart={productsCart}
                        setProductsCart={setProductsCart}
                        theme={theme}
                    />
                ))}
            </div>
        </div>
    );
};
