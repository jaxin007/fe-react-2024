import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';

import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.module.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className="home">
                <AboutMe></AboutMe>
            </main>
        </>
    );
}

export default App;
