import './Main.scss';

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__header">
                        <h1>
                            Зарабатывайте больше
                            <br /><span>с WELBEX</span>
                        </h1>
                        <p>Развиваем и контролируем продажи за вас</p>
                    </div>
                    <div className="consultation">
                        <h3>Вместе с <span>бесплатной</span> <span>консультацией</span> мы дарим:</h3>
                        <div className="consultation__content">
                            <div className="consultation__item">
                                <h3> </h3>
                                <p>30 готовых решений</p>
                            </div>
                            <div className="consultation__item">
                                <h3> </h3>
                                <p>с показателями вашего бизнеса</p>
                            </div>
                            <div className="consultation__item">
                                <h3> </h3>
                                <p>отдела продаж и CRM системы</p>
                            </div>
                            <div className="consultation__item">
                                <h3> </h3>
                                <p>использования CRM</p>
                            </div>
                        </div>
                        <button className="consultation__button">Получить консультацию</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;