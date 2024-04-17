import React from 'react';
import "./our-work.scss";
import arrow_left from "../../images/arrow-left.svg";
import arrow_right from "../../images/arrow-right.svg";
import work1 from "../../images/work1.png";
import work2 from "../../images/work2.png";
import work3 from "../../images/work3.png";
import work4 from "../../images/work4.png";
import wella from "../../images/wella.svg";
import schwarzkopf from "../../images/schwarzkopf.svg";
import tigi from "../../images/tigi.svg";
import londa from "../../images/londa.svg";
import nioxin from "../../images/nioxin.svg";


export default function OurWork() {
    return (
        <section className="our-work" id="our-work">
            <div className="content-container">
                <div className="mover-block">
                    <h2>Наши работы</h2>
                    <div className="mover-buttons">
                        <button>
                            <img src={arrow_left} alt={ "arrow-left" } />
                        </button>
                        <button>
                            <img src={arrow_right} alt={ "arrow-right" }/>
                        </button>
                    </div>
                </div>
                <div className="work-cards-container">
                    <div className="work-cards-container__work-pic">
                        <a href="@">
                        <img src={ work1 } alt={ "face" } />
                        </a>
                    </div>
                    <div className="work-cards-container__work-pic">
                        <a href="@">
                        <img src={ work2 } alt={ "face" } />
                        </a>
                    </div>
                    <div className="work-cards-container__work-pic">
                        <a href="@">
                        <img src={ work3 } alt={ "nails" } />
                        </a>
                    </div>
                    <div className="work-cards-container__work-pic">
                        <a href="@">
                        <img src={ work4 } alt={ "hair" } />
                        </a>
                    </div>
                </div>
                <div className="brand-container">
                    <h4>Бренды, которые мы используем в работе</h4>
                    <div className="brand-container__img-wrapper">
                        <img src= {wella} alt={ "wella" }/>
                        <img src= {schwarzkopf} alt={ "schwarzkopf" }/>
                        <img src= {tigi} alt={ "tigi" }/>
                        <img src= {londa} alt={ "londa" }/>
                        <img src= {nioxin} alt={ "nioxin" }/>
                    </div>
                </div>
            </div>
        </section>
    );
};
