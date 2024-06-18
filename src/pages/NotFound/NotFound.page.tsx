import { NavLink } from 'react-router-dom';

import styles from './NotFound.module.css';

export const NotFoundPage = () => (
    <>
        <div className={styles.notFoundWrapper}>
            <div className={styles.notFoundContent}>
                <h1 className={styles.numbers}>404</h1>
                <h3 className={styles.notFoundText}>Page not found</h3>
                <NavLink to="/">
                    <button className={styles.backHomeButton}>Go back home</button>
                </NavLink>
            </div>
        </div>
    </>
);
