import React from 'react';
// import { BrowserRouter as Link, Router } from 'react-router-dom';
import "./footer.scss";


export default function Footer() {
    return (
        // <Router>
            <footer>
                <div className="content-container content-container__for-footer">
                    <div className="footer__copyright">
                        <p>© 2020 «Море красоты»</p>
                        <a href="@">Политика конфиденциальности</a>
                    
                        <nav className="footer__nav">
                            <ul>
                                <li>
                                    <a href="@">Услуги и цены</a>
                                    {/* <Link to ="/services">Услуги и цены</Link> */}
                                </li>
                                <li>
                                    <a href="@">Мастера</a>
                                </li>
                                <li>
                                    <a href="@">Наши работы</a>
                                </li>
                                <li>
                                    <a href="@">О нас</a>
                                </li>
                                <li>
                                    <a href="@">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        // </Router>
    );
}