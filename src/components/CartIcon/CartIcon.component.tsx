import type { FC } from 'react';

import { images } from '@/constants/images.constant.ts';

import styles from './CartIcon.module.css';

interface CartIconProps {
    counter: number;
    handleCartIcon?: () => void;
}

export const CartIcon: FC<CartIconProps> = ({ counter, handleCartIcon }) => (
    <div>
        <a className={styles.cartButton} onClick={handleCartIcon ?? (() => null)} href="/#">
            <img src={images.cartIcon} alt={'cart icon'} />
            {counter ? <div className={styles.counter}>{counter}</div> : ''}
        </a>
    </div>
);
