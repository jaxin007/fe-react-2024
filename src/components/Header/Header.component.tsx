import IconWithRedirect from '@/components/IconWithRedirect/IconWithRedirect.component.tsx';
import TextWithRedirect from '@/components/TextWithRedirect/TextWithRedirect.component.tsx';
import { images } from '@/constants/images.constant.ts';
import { links } from '@/constants/links.constant.ts';

import styles from './header.module.css';

export const Header = () => (
    <div>
        <div className={styles.header}>
            <div className={styles.leftIcons}>
                <IconWithRedirect icon={images.maCrownIcon} url={links.google} alt={'masters academy icon'}></IconWithRedirect>
                <div className={styles.themes}>
                    <img src={images.whiteThemeIcon} alt={'white theme icon'} />
                    <img src={images.verticalDivider} alt={'vertical divider'} />
                    <img src={images.darkThemeIcon} alt={'dark theme icon'} />
                </div>
            </div>
            <div className={styles.rightIcons}>
                <div className={styles.pageTabs}>
                    <TextWithRedirect url={'/#'} text={'About'}></TextWithRedirect>
                    <TextWithRedirect url={'/#'} text={'Products'}></TextWithRedirect>
                </div>
                <IconWithRedirect className={styles.cartIcon} icon={images.cartIcon} url="/#"></IconWithRedirect>
                <IconWithRedirect className={styles.menuDuoIcon} icon={images.menuDuoIcon} url="/#"></IconWithRedirect>
                <button className={styles.signInButton}>
                    <img src={images.signInIcon} alt="sign in button" />
                    <p>Login</p>
                </button>
                <button className={styles.signUpButton}>
                    <img src={images.signUpIcon} alt="sign up button" />
                    <p>Sign Up</p>
                </button>
            </div>
        </div>
    </div>
);
