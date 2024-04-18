import { AboutMeComponent } from '@/components/about-me/About-me.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.module.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className="home">
                <AboutMeComponent></AboutMeComponent>
            </main>
        </>
    );
}

export default App;
