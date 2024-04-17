import React from "react";
import "./contacts.scss";
import vk from "../../images/vk.svg";
import inst from "../../images/inst.svg";
import youtube from "../../images/youtube.svg";

export default function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="content-container">
                <div className="left-part">
                    <h2>Контакты</h2>
                    <p>Томск, проспект Ленина, дом 13</p>
                    <p>8 (499) 686-17-62</p>
                    <a href="mailto:info@more-krasoty.ru">info@more-krasoty.ru</a>
                    <div className="left-part__social">
                        <h4>Мы в социальных сетях</h4>
                        <div className="left-part__social-icons">
                            <img src={ vk } alt={"vk"} />
                            <img src={ inst } alt={"inst"} />
                            <img src= { youtube } alt={"youtube"} />
                        </div>
                    </div>
                </div>
                <div className="right-part">
                <form>
                    <h3>Быстрая запись</h3>
                    <p>
                        Наш менеджер перезвонит в течение нескольких минут, уточнит
                        подробности и согласует время.
                    </p>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="phone" placeholder="+7 (___) ___-__-__" />
                    <button className="button" type="submit">
                        Записаться
                    </button>
                    <p className="right-part__conditions">
                        Нажимая на кнопку вы соглашаетесь с{" "}
                    <a href="@">обработкой персональных данных</a>
                    </p>
                </form>
                </div>
            </div>
        </section>
    );
};