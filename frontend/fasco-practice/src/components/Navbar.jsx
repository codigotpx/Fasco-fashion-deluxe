import '../styles/Navbar.css';
import Button from './Buttons/Button.jsx'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Deals</a></li>
                <li><a href='#'>New Arrivals</a></li>
                <li><a href='#'>Packages</a></li>
                <li><a href='#'>sign in</a></li>
            </ul>
            <Button variant="primary">Sign Up</Button>
        </nav>
    )
}

export default Navbar;