import type { FC } from 'react';

import styles from '../Pagination/Pagination.module.css';

interface PaginationButtonProps {
    buttonPage: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
}

export const PaginationButton: FC<PaginationButtonProps> = ({ buttonPage, currentPage, handlePageChange }) => {
    const isActive = currentPage === buttonPage;

    return (
        <button
            onClick={() => (isActive ? () => null : handlePageChange(buttonPage))}
            className={isActive ? styles.paginationButtonActive : styles.paginationButton}
        >
            {buttonPage}
        </button>
    );
};
