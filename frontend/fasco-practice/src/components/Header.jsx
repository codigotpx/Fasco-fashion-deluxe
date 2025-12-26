import '../styles/Header.css'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='header-site'>
            <h1 className='logo'>FASCO</h1>
            <div className='navbar-container'>
                <Navbar />
            </div>
        </header>
    )
}

export default Header