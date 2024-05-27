import React, { useEffect } from 'react';

import { CartIcon } from '@/components/CartIcon/CartIcon.component.tsx';
import type { Product } from '@/models/product.model.ts';
import type { Cart } from '@/types/cart.type.ts';
import type { Themes } from '@/types/themes.type.ts';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
    onCartChange: () => void;
    productsCart: Cart;
    setProductsCart: (cart: Cart) => void;
    theme: Themes;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCartChange, productsCart, setProductsCart, theme }) => {
    const isInCart = productsCart[product.id.toString()];

    // - If the product is in the cart, the counter will be 1
    const productCount = isInCart?.count || 0;

    const handleCartClick = () => {
        const updatedCart: Cart = isInCart
            ? { ...productsCart, [product.id]: { count: isInCart.count + 1 } }
            : { ...productsCart, [product.id]: { count: 1 } };

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setProductsCart(updatedCart);
    };

    useEffect(() => {
        onCartChange();
    }, [onCartChange, productCount]);

    return (
        <div className={styles.cardWrapper}>
            <img className={styles.cardImage} src={product.images[0]} alt="product" />
            <div className={styles.cardTitle}>{product.title}</div>
            <div className={styles.cardPriceBlock}>
                <div className={styles.priceWrap}>
                    <div className={styles.cardPrice}>{product.price}</div>
                    <p className={styles.hryvna}>₴</p>
                </div>
                <CartIcon counter={productCount} handleCartIcon={handleCartClick} theme={theme} />
            </div>
        </div>
    );
};
