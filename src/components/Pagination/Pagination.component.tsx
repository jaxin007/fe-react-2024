import type { FC, JSX } from 'react';

import { ArrowLeft } from '@/assets/icons/ArrowLeft.tsx';
import { ArrowRight } from '@/assets/icons/ArrowRight.tsx';
import { PaginationButton } from '@/components/PaginationButton/PaginationButton.component.tsx';
import type { Themes } from '@/types/themes.type.ts';

import styles from './Pagination.module.css';

interface PaginationProps {
    totalItems: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
    theme: Themes;
    totalPages: number;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Pagination: FC<PaginationProps> = ({ totalItems, theme, currentPage, handlePageChange, totalPages }) => {
    const firstPage = 1;

    const isOnFirstPage = currentPage === firstPage;
    const isOnLastPage = currentPage === totalPages;

    const goToNextPage = () => {
        if (!isOnLastPage) {
            handlePageChange(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (!isOnFirstPage) {
            handlePageChange(currentPage - 1);
        }
    };

    const paginationButtons: JSX.Element[] = [];

    // Generate the pagination buttons
    for (let index = 0; index < totalPages; index++) {
        const page = index + 1;
        const nextPage = currentPage + 1;
        const previousPage = currentPage - 1;

        // Generate the pagination button
        const pageButton = <PaginationButton buttonPage={page} currentPage={currentPage} handlePageChange={handlePageChange} key={page} />;
        // Generate the previous and next buttons
        const pageButtonPrevious = (
            <PaginationButton buttonPage={page - 1} currentPage={currentPage} handlePageChange={handlePageChange} key={previousPage} />
        );
        const pageButtonNext = (
            <PaginationButton buttonPage={page + 1} currentPage={currentPage} handlePageChange={handlePageChange} key={nextPage} />
        );

        // Generate the three dots
        const threeDots = <div className={styles.paginationDots}>...</div>;

        // Calculate if the page is more than one page away from the start and end. Need it to decide if we should show the three dots for the pages except the first and last one's.
        const isMoreThanOnePageAwayFromStart = page - 1 > 1;
        const isMoreThanOnePageAwayFromEnd = totalPages - page > 1;

        // Calculate if the page is more than two pages away from the start and end. Need it to decide if we should show the three dots only for the first and the last pages.
        const isMoreThanTwoPagesAwayFromStart = page - 1 > 2;
        const isMoreThanTwoPagesAwayFromEnd = totalPages - page > 2;

        // First page button
        if (page === firstPage) {
            paginationButtons.push(pageButton);

            // If the current page is the first page and there are more than one page away from the end, show the next button
            if (currentPage === firstPage && isMoreThanOnePageAwayFromEnd) {
                // If there are more than two total pages show the next page button
                if (totalPages > 2) {
                    paginationButtons.push(pageButtonNext);
                }

                // If there are more than two page away from the end, show the three dots
                // example: 1 2 ... 5 or 1 ... 3 4
                if (isMoreThanTwoPagesAwayFromEnd) {
                    paginationButtons.push(threeDots);
                }
            }

            continue;
        }

        // Last page button
        if (page === totalPages && page > 1) {
            // If the current page is the last page and there are more than one page away from the start, show the previous button
            if (currentPage === totalPages && isMoreThanOnePageAwayFromStart) {
                // If there are more than two pages away from the start, show the three dots
                // example: 1 2 ... 5 or 1 ... 3 4
                if (isMoreThanTwoPagesAwayFromStart) {
                    paginationButtons.push(threeDots);
                }

                // If there are more than two total pages show the previous page button
                if (totalPages > 2) {
                    paginationButtons.push(pageButtonPrevious);
                }
            }

            paginationButtons.push(pageButton);

            continue;
        }

        // Process the middle pages
        if (currentPage === page) {
            // If the current page is more than two pages away from the start, show the three dots
            if (isMoreThanOnePageAwayFromStart) {
                paginationButtons.push(threeDots, pageButtonPrevious);
            }

            // Show the current page button
            paginationButtons.push(pageButton);

            // If the current page is more than two pages away from the end, show the three dots
            if (isMoreThanOnePageAwayFromEnd) {
                paginationButtons.push(pageButtonNext, threeDots);
            }
        }
    }

    return (
        <>
            <div className={styles.paginationWrapper}>
                <button
                    className={isOnFirstPage ? styles.paginationButtonInactive : styles.paginationButton}
                    onClick={() => goToPreviousPage()}
                >
                    <ArrowLeft theme={theme} isActive={!isOnFirstPage} />
                </button>
                {paginationButtons}
                <button className={isOnLastPage ? styles.paginationButtonInactive : styles.paginationButton} onClick={() => goToNextPage()}>
                    <ArrowRight theme={theme} isActive={!isOnLastPage} />
                </button>
            </div>
        </>
    );
};
