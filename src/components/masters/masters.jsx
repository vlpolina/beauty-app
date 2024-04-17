import React from 'react';
import "./masters.scss";
import ira from "../../images/ira.png";
import zhanna from "../../images/zhanna.png";
import alina from "../../images/alina.png";
import lena from "../../images/lena.png";

export default function Masters() {
    return(
        <section className="masters" id="masters">
            <div className="content-container">
                <h2 className="content-container__header content-container__header__for-masters">
                    Мастера
                </h2>
                <p className="masters__description">
                    Дружная команда настоящих профессионалов
                </p>
                <div className="master-cards-container">
                    <div className="master-card">
                        <p data-hystmodal="#submit-modal">
                            <p className="master-card__text">Записаться к мастеру</p>
                            <img className="master-card__img" src={ ira } alt={ "ira" }/>
                        </p>
                        <h3>Краснова Ирина</h3>
                        <p className="master-card__description">Мастер ногтевого сервиса</p>
                        <p className="master-card__experience">опыт работы 5 лет</p>
                    </div>
                    <div className="master-card">
                        <p data-hystmodal="#submit-modal">
                            <p className="master-card__text">Записаться к мастеру</p>
                            <img className="master-card__img" src={ zhanna } alt={ "zhanna" }/>
                        </p>
                        <h3>Камилова Жанна</h3>
                        <p className="master-card__description">Визажист-стилист</p>
                        <p className="master-card__experience">опыт работы 5 лет</p>
                    </div>
                    <div className="master-card">
                        <p data-hystmodal="#submit-modal">
                            <p className="master-card__text">Записаться к мастеру</p>
                            <img className="master-card__img" src={ alina } alt={ "alina" }/>
                        </p>
                        <h3>Киселева Алина</h3>
                        <p className="master-card__description">Парикмахер</p>
                        <p className="master-card__experience">опыт работы 5 лет</p>
                    </div>
                    <div className="master-card">
                        <p data-hystmodal="#submit-modal">
                            <p className="master-card__text">Записаться к мастеру</p>
                            <img className="master-card__img" src={ lena } alt={ "lena" }/>
                        </p>
                        <h3>Иванова Елена</h3>
                        <p className="master-card__description">Мастер ногтевого сервиса</p>
                        <p className="master-card__experience">опыт работы 5 лет</p>
                    </div>
                </div>
            </div>
            </section>
    );
};