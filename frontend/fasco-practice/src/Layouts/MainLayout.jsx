import { Outlet  } from 'react-router';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/Layout.css'

const MainLayout = () => {
    return (
        <div className='layout-container'>
            <div className='container-element'> 
                <Header />
                <main className='main-content'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout;