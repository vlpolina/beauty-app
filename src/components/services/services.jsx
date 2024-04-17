import React from 'react';
import "./services.scss";

export default function Services () {
    return(
        <section className="services" id="services">
            <div className="content-container content-container__for-services">
                <h3 className="content-container__header">Услуги и цены</h3>
                    <ul className="services__horizontal-list">
                        <li>
                            <p>
                                <span style={{ textDecoration: "underline", color: "#00BF78" }}>
                                Стрижка и укладка
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>Косметология</p>
                        </li>
                        <li>
                            <p>Маникюр и педикюр</p>
                        </li>
                        <li>
                            <p>Макияж</p>
                        </li>
                        <li>
                            <p>Брови и ресницы</p>
                        </li>
                        <li>
                            <p>Массаж</p>
                        </li>
                    </ul>
                    <ul className="name-n-price">
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Женская стрижка</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Мужская стрижка</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Детский стиль</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Креативный стиль</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Стрижка бороды и усов</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Экспресс укладка</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Укладка дневная</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">1200 ₽</p>
                        </li>
                        <li className="name-n-price__element">
                            <div className="name-n-price__info">
                                <h4>Прическа вечерняя (свадебная)</h4>
                                <p>Короткие волосы</p>
                            </div>
                            <p className="name-n-price__price">3000 ₽</p>
                        </li>
                </ul>
            </div>
            </section>
    );
};