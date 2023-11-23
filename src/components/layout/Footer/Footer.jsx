import './Footer.scss';
import Telegram from '../../../assets/icons/telegram.svg';
import viber from '../../../assets/icons/viber.svg';
import Whatsapp from '../../../assets/icons/whatsapp.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__col">
                        <h4>О компании</h4>
                        <a href="/">Партнёрская программа</a>
                        <a href="/">Вакансии</a>
                    </div>
                    <div className="footer__col">
                        <h4>Меню</h4>
                        <div className="footer__col-content">
                            <div>
                                <a href="/">Расчёт стоимости</a>
                                <a href="/">Услуги</a>
                                <a href="/">Виджеты</a>
                                <a href="/">Интеграции</a>
                                <a href="/">Наши клиенты</a>
                            </div>
                            <div>    
                                <a href="/">Кейсы</a>
                                <a href="/">Благодарственные письма</a>
                                <a href="/">Сертификаты</a>
                                <a href="/">Блог на Youtube</a>
                                <a href="/">Вопрос / Ответ</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h4>Контакты</h4>
                        <a href="tel:+75555555555">+7 555 555-55-55</a>
                        <div className="footer__social-icons">
                            <a href="/">
                                <img src={Telegram} alt="" />
                            </a>
                            <a href="/">
                                <img src={viber} alt="" />
                            </a>
                            <a href="/">
                                <img src={Whatsapp} alt="" />
                            </a>
                        </div>
                        <p>Москва, Путевой проезд 3с1, к 902</p>
                        <div className="copyright">
                            <p>©WELBEX 2022. Все права защищены.</p>
                            <a href="/">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;