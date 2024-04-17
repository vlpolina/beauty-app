import React from 'react';
import "./about.scss";
import player_layout from "../../images/player_layout.svg";
import frame from "../../images/frame.svg";
import creampot from "../../images/creampot.svg";
import scissors from "../../images/scissors.svg";
// import video_preview from "../../images/video-preview.png";


export default function About() {
    return (
        <section className="about" id="about">
            <div className="content-container"> 
                <h2 className="content-container__header">О салоне</h2>
                <div className="about__desc-n-pic">
                    <div className="about__description"> 
                        <p className="about__p1">
                            Мир красоты - это уютный салон в самом центре города. Здесь работают
                            профессиональные визажисты, стилисты и мастера татуажа
                        </p>
                        <p className="about__p2">
                            Красота и хороший уход никогда не выходят из моды. Мы приглашаем Вас
                            в место, где гармония обретает форму, а внешность становится
                            отражением внутреннего мира. Новая жизнь начинается с небольших
                            изменений. Мы помогаем нашим клиентам воплотить их индивидуальность
                            во внешнем облике. Мы создаем стиль – вместе с Вами и для Вас.
                        </p>
                    </div>
                    <div className="about__video">
                        <img src={player_layout} alt="player_layout"/>
                    </div>
                    
                </div>
            
                <div className="about-cards">
                    <div className="about-cards__element">
                        <img className="about-cards__pic" src={frame} alt="frame"/>
                        <h3>Удобные кабинеты</h3>
                            <p>
                                Комфорт и стиль - принцип создания кабинетов салона красоты. Только
                                эстетика и удобство для Вас
                            </p>
                    </div>
                    <div className="about-cards__element">
                        <img className="about-cards__pic" src={creampot} alt="creampot" />
                        <h3>Качественная косметика</h3>
                        <p>
                            Используем профессиональные материалы высшего качества
                            <br />
                            лучших брендов
                        </p>
                    </div>
                    <div className="about-cards__element">
                        <img className="about-cards__pic" src={scissors} alt="scissors" />
                        <h3>Опытные мастера</h3>
                        <p>
                            Работают только опытные мастера с чувством стиля. Смотрите наших
                            специалистов в разделе Мастера
                        </p>
                    </div>
                </div> 
            </div>
        </section>
    )
}