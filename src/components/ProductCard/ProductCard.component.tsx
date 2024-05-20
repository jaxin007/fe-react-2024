import React, { useEffect } from 'react';

import { CartIcon } from '@/components/CartIcon/CartIcon.component.tsx';
import type { Product } from '@/models/product.model.ts';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
    onCartChange: () => void;
    cartIds: string[];
    setProductIds: (ids: string[]) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCartChange, cartIds, setProductIds }) => {
    const isInCart = cartIds.includes(product.id.toString());

    const handleCartClick = () => {
        const updatedCartIds = isInCart
            ? cartIds.filter((currentProductId) => currentProductId !== product.id.toString())
            : [...cartIds, product.id.toString()];

        localStorage.setItem('cartIds', JSON.stringify(updatedCartIds));
        setProductIds(updatedCartIds);
    };

    useEffect(() => {
        onCartChange();
    }, [cartIds, onCartChange]);

    return (
        <div className={styles.cardWrapper}>
            <img className={styles.cardImage} src={product.images[0]} alt="product" />
            <div className={styles.cardTitle}>{product.title}</div>
            <div className={styles.cardPriceBlock}>
                <div className={styles.priceWrap}>
                    <div className={styles.cardPrice}>{product.price}</div>
                    <p className={styles.hryvna}>₴</p>
                </div>
                <CartIcon counter={isInCart ? 1 : 0} handleCartIcon={handleCartClick} />
            </div>
        </div>
    );
};
