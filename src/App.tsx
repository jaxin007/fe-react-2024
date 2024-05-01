import { AboutMe } from '@/components/AboutMe/AboutMe.component.tsx';
import { Footer } from '@/components/Footer/Footer.component.tsx';
import { Header } from '@/components/Header/Header.component.tsx';

import './App.module.css';

function App() {
    return (
        <>
            <Header />
            <AboutMe></AboutMe>
            <Footer></Footer>
        </>
    );
}

export default App;
