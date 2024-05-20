import type { FC } from 'react';

import { images } from '@/constants/images.constant.ts';

import styles from './CartIcon.module.css';

interface CartIconProps {
    counter: number;
    handleCartIcon?: () => void;
}

export const CartIcon: FC<CartIconProps> = ({ counter, handleCartIcon }) => (
    <div>
        <button className={styles.cartButton} onClick={handleCartIcon ?? (() => null)}>
            <img src={images.cartIcon} alt={'cart icon'} />
            {counter ? <div className={styles.counter}>{counter}</div> : ''}
        </button>
    </div>
);
