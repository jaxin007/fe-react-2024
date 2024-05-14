import React, { useState } from 'react';

import { ProductCard } from '@/components/ProductCard/ProductCard.component.tsx';
import { products } from '@/constants/products.constant.ts';
import type { Product } from '@/models/product.model.ts';

import styles from './ProductsList.module.css';

interface ProductProps {
    updateTotalCart: () => void;
}

export const ProductList: React.FC<ProductProps> = ({ updateTotalCart }) => {
    const initialProductIds = localStorage.getItem('cartIds') || '[]';
    const [productIds, setProductIds] = useState<string[]>(initialProductIds ? JSON.parse(initialProductIds) : []);

    return (
        <div className={styles.mainGridWrapper}>
            <div className={styles.grid}>
                {products.map((item: Product) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onCartChange={updateTotalCart}
                        cartIds={productIds}
                        setProductIds={setProductIds}
                    />
                ))}
            </div>
        </div>
    );
};
