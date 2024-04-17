import React from 'react';
import "./popular.scss";
import nogotochki from "../../images/nogotochki.png";

export default function Popular () {
    return (
        <section className="popular">
                <div className="content-container">
                    <h2 className="content-container__header">Популярные услуги</h2>
                    <div className="popular-cards-container">
                        <div className="popular-card">
                            <img
                                className="popular-card__img"
                                src={nogotochki}
                                alt="nogotochki"
                            />
                            <h3>Маникюр</h3>
                            <p className="popular-card__description">
                                Аппаратный, комбинированный или классический.
                            </p>
                            <button
                                className="button button__small"
                                data-hystmodal="#submit-modal"
                            >
                                Записаться
                            </button>   
                        </div>
                        <div className="popular-card">
                            <img
                                className="popular-card__img"
                                src={nogotochki}
                                alt="nogotochki"
                            />
                            <h3>Покрытие гель-лак</h3>
                            <p className="popular-card__description">
                                Гель-лак наносится в несколько слоев с использование базы и топа.
                                Каждый слой полимеризуется в LED-лампе.
                            </p>
                            <button
                                className="button button__small"
                                data-hystmodal="#submit-modal"
                            >
                                Записаться
                            </button>
                        </div>
                        <div className="popular-card">
                            <img
                                className="popular-card__img"
                                src={nogotochki}
                                alt="nogotochki"
                            />
                            <h3>Бразильский маникюр</h3>
                            <p className="popular-card__description">
                                Выполняется в одноразовых перчатках наполненных увлажняющим
                                лосьоном.
                            </p>
                            <button
                                className="button button__small"
                                data-hystmodal="#submit-modal"
                            >
                                Записаться
                            </button>
                        </div>
                        <div className="popular-card">
                            <img
                                className="popular-card__img"
                                src={nogotochki}
                                alt="nogotochki"
                            />
                            <h3>Педикюр</h3>
                            <p className="popular-card__description">
                                Аппаратный, комбинированный или классический.
                            </p>
                            <button
                                className="button button__small"
                                data-hystmodal="#submit-modal"
                            >
                                Записаться
                            </button>
                        </div>
                        <div className="popular-card">
                            <img
                                className="popular-card__img"
                                src={nogotochki}
                                alt="nogotochki"
                            />
                            <h3>Парафинотерапия</h3>
                            <p className="popular-card__description">
                                Благодаря этой процедуре увлажнение кожи увеличивается на 80%, также
                                выводит токсины и укрепляет суставы.
                            </p>
                            <button
                                className="button button__small"
                                data-hystmodal="#submit-modal"
                            >
                                Записаться
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    );
};