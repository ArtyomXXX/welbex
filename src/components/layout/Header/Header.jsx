import './Header.scss';
import Logo from '../../../assets/icons/logo_welbex.svg'
import Telegram from '../../../assets/icons/telegram.svg';
import viber from '../../../assets/icons/viber.svg';
import Whatsapp from '../../../assets/icons/whatsapp.svg';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <nav className="nav">
                        <div className="logo">
                            <a href="/"><img src={Logo} alt="" /></a>
                            <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                        </div>
                        <a className="nav__link" href="/">Услуги</a>
                        <a className="nav__link" href="/">Виджеты</a>
                        <a className="nav__link" href="/">Интеграции</a>
                        <a className="nav__link" href="/">Кейсы</a>
                        <a className="nav__link" href="/">Сертификаты</a>
                    </nav>
                    <div className="header__contact">
                        <a href="tel:+75555555555">+7 555 555-55-55</a>
                        <div className="header__social-icons">
                            <a href="/"><img src={Telegram} alt="" /></a>
                            <a href="/"><img src={viber} alt="" /></a>
                            <a href="/"><img src={Whatsapp} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ); 
}

export default Header;