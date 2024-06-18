import type { FC } from 'react';

import type { Themes } from '@/types/themes.type.ts';

import styles from './CartIcon.module.css';

interface CartIconProps {
    counter: number;
    handleCartIcon?: () => void;
    theme?: Themes;
}

export const CartIcon: FC<CartIconProps> = ({ counter, handleCartIcon, theme }) => (
    <div>
        <button className={styles.cartButton} onClick={handleCartIcon ?? (() => null)}>
            <div>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.1699 16.3227C14.0654 16.3227 13.1699 17.2759 13.1699 18.4517C13.1699 19.6275 14.0654 20.5807 15.1699 20.5807C16.2745 20.5807 17.1699 19.6275 17.1699 18.4517C17.1699 17.2759 16.2745 16.3227 15.1699 16.3227ZM15.1699 16.3227H7.46387C7.00281 16.3227 6.77185 16.3227 6.58203 16.2353C6.41458 16.1583 6.2693 16.0343 6.16346 15.8761C6.04482 15.6989 5.99711 15.4618 5.90267 14.9926L3.44141 2.76567C3.34476 2.28556 3.29579 2.04577 3.17578 1.86645C3.06994 1.70829 2.92469 1.58381 2.75724 1.50678C2.56738 1.41943 2.33771 1.41943 1.87646 1.41943H1.16992M4.16992 4.61298H17.0431C17.7649 4.61298 18.1255 4.61298 18.3677 4.77304C18.5799 4.91324 18.7352 5.13313 18.803 5.38902C18.8803 5.68115 18.781 6.05004 18.5809 6.78828L17.1963 11.898C17.0767 12.3393 17.0169 12.5596 16.8955 12.7234C16.7884 12.868 16.6471 12.9811 16.487 13.0506C16.306 13.1291 16.091 13.1291 15.662 13.1291H5.90039M6.16992 20.5807C5.06535 20.5807 4.16992 19.6275 4.16992 18.4517C4.16992 17.2759 5.06535 16.3227 6.16992 16.3227C7.27449 16.3227 8.16992 17.2759 8.16992 18.4517C8.16992 19.6275 7.27449 20.5807 6.16992 20.5807Z"
                        stroke={theme ? (theme === 'dark' ? '#FEFEFE' : '#111') : '#FEFEFE'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {!!counter && <div className={styles.counter}>{counter}</div>}
            </div>
        </button>
    </div>
);
