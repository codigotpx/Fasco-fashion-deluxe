import '../styles/Header.css'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const Header = () => {

    const [ isHidden, setIsHidden ] = useState(false)
    const [ lasScrollY, setLasCrollY ] = useState(0)
    const [ isScrolled, setIsScrolled ] = useState(false)

    useEffect (() => {
        const controlNavbar = () => {
            
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }


            if (window.scrollY > lasScrollY && window.scrollY > 100) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }

            setLasCrollY(window.scrollY)
        }

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lasScrollY])

    return (
        <header className={`header-site ${isHidden ? 'header--hidden' : ''} ${isScrolled ? 'header--scrolled' : ''}`}>
            <h1 className='logo'>FASCO</h1>
            <div className='navbar-container'>
                <Navbar />
            </div>
        </header>
    )
}

export default Header