import React from 'react';
import "./header.scss";
import girl from "C:/Users/aleks/Desktop/beauty-world/my-app/src/images/girl.png";

export default function Header() {
    return (
        <header className="header">
            <div className="content-contaitner content-container__for-header">
                <div className="header__top">
                <div className="header__logo">Мир красоты</div>
                    <nav className="header__nav">
                        <div>
                            <ul>
                                <li>
                                    <p>Услуги и цены</p>
                                </li>
                                <li>
                                    <p>Мастера</p>
                                </li>
                                <li>
                                    <p>Наши работы</p>
                                </li>
                                <li>
                                    <p>О нас</p>
                                </li>
                                <li>
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
            </div>
        </header>
    )
}

