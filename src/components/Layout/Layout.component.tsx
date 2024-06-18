import type { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';
import type { Pages } from '@/types/pages.type.ts';
import type { Themes } from '@/types/themes.type.ts';

interface LayoutProps {
    theme: Themes;
    setTheme: (theme: Themes) => void;
    totalProductsInCart: number;
}

export const LayoutComponent: FC<LayoutProps> = ({ theme, setTheme, totalProductsInCart }) => {
    const navigate = useNavigate();

    const handleActivePage = (page: Pages) => {
        navigate(page);
    };

    return (
        <>
            <Header theme={theme} setTheme={setTheme} totalProductsInCart={totalProductsInCart} handleActivePage={handleActivePage} />
            <Outlet />
            <Footer />
        </>
    );
};
