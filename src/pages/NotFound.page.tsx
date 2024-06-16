import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.css';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.notFoundWrapper}>
                <div className={styles.notFoundContent}>
                    <h1 className={styles.numbers}>404</h1>
                    <h3 className={styles.notFoundText}>Page not found</h3>
                    <button className={styles.backHomeButton} onClick={() => navigate('/')}>
                        Go back home
                    </button>
                </div>
            </div>
        </>
    );
};
