import IconWithRedirect from '@/components/IconWithRedirect/IconWithRedirect.component.tsx';
import { images } from '@/constants/images.constant.ts';
import { links } from '@/constants/links.constant.ts';

import styles from './header.module.css';

export const Header = () => (
    <div>
        <div className={styles.header}>
            <div className={styles.leftIcons}>
                <IconWithRedirect icon={images.maCrownIcon} url={links.google} alt={'masters academy icon'}></IconWithRedirect>
            </div>
            <div className={styles.rightIcons}>
                <img src={images.cartIcon} alt="cart icon" />
                <img src={images.menuDuoIcon} alt="menu duo icon" />
            </div>
        </div>
    </div>
);
