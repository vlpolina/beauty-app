import React from 'react';
import "./header.scss";
import girl from "../../images/girl.png";


export default function Header () {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    


    return (
        <header className="header">
            <div className="content-contaitner content-container__for-header">
                <div className="header__top">
                <div className="header__logo">Мир красоты</div>
                    <nav className="header__nav">
                        <div>
                            <ul>
                                <li onClick={() => scrollTo('about')}>
                                    <p>О нас</p>
                                </li>
                                <li onClick={() => scrollTo('services')}>
                                    <p>Услуги и цены</p>
                                </li>
                                <li onClick={() => scrollTo('masters')}>
                                    <p>Мастера</p>
                                </li>
                                <li onClick={() => scrollTo('our-work')}>
                                    <p>Наши работы</p>
                                </li>
                                <li onClick={() => scrollTo('contacts')}>
                                    <p>Контакты</p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header__info">
                        <p className="header__phone-number">8 (499) 686-17-62</p>
                        <p className="header__schedule">с 10.00 до 19.00 без выходных</p>
                    </div>
                    
                </div>
                <div className="header__content">
                    <div className="header__hero">
                        <div className="header__short-description">
                            <h2>Создай свой образ вместе с нами</h2>
                            <p>Идеальный образ за 60 минут</p>
                        </div>
                        <button className="button button__big" data-hystmodal="#submit-modal">
                            Записаться онлайн
                        </button>
                    </div>
                        <div className="header__social"></div>
                </div>
                <img className="header__girl" src={girl} alt="girl" />
                {/* <img className="background" src={background} alt="background" /> */}
            </div>
        </header>
    )
}

