import IconWithRedirect from '@/components/IconWithRedirect/IconWithRedirect.component.tsx';
import { images } from '@/constants/images.constant.ts';
import { links } from '@/constants/links.constant.ts';

import styles from './footer.module.css';

export const Footer = () => (
    <>
        <div className={styles.footerBlock}>
            <div className={styles.line}></div>
            <div className={styles.footerInfo}>
                <div className={styles.iconsBlock}>
                    <IconWithRedirect icon={images.social.facebook} url={links.facebook}></IconWithRedirect>
                    <IconWithRedirect icon={images.social.linkedin} url={links.linkedin}></IconWithRedirect>
                    <IconWithRedirect icon={images.social.instagram} url={links.instagram}></IconWithRedirect>
                </div>
                <p>
                    Made with 💗 on course{' '}
                    <a href="" className={styles.orangeLink}>
                        <u>&apos;Intro to React&apos; from Masters Academy in 2024</u>
                    </a>{' '}
                    , by Dmytro
                </p>
            </div>
        </div>
    </>
);
