import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer-container">
                <div className='footer-link-container'>
                    <h1 className="footer-logo-fasco"> FASCO</h1>
                    <ul className="footer-ul-container">
                        <li className="footer-li"><a href=""></a>Support Center</li>
                        <li className="footer-li"><a href=""></a>Invoicing</li>
                        <li className="footer-li"><a href=""></a>Contract</li>
                        <li className="footer-li"><a href=""></a>Carrers</li>
                        <li className="footer-li"><a href=""></a>Blog</li>
                        <li className="footer-li"><a href=""></a>FAQ,s</li>
                    </ul>
                </div>
                <p className="footer-copyright">Copyright © 2025. All Rights Reseved. Built by <a href='https://www.instagram.com/camilo_ce2/' 
                className='footer-link-copyright' target='_blank'> Camilo cer</a> and designed by 
                <a href="https://buymeacoffee.com/hamzaanza00" target="_blank" className='footer-link-copyright'> hamza anza</a></p>
            </section>
        </>
    )
}

export default Footer;