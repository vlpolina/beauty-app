import React from 'react';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
// import "./App.scss";
import "./components/common.scss";
import Contacts from './components/contacts/contacts.jsx';
import OurWork from './components/our-work/our-work.jsx';
import Masters from './components/masters/masters.jsx';
import Popular from './components/popular/popular.jsx';
import Services from './components/services/services.jsx';
import ScrollToTopButton from './components/button-up/button-up.jsx';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App(props) {
  return (
    // <Router>
      <div className='App'>
        <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/" />
        <link rel="stylesheet" href="./compiled-styles/styles.css" />
        <link rel="stylesheet" href="./plugins/hystModal-0.4/dist/hystmodal.min.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="" />
      
        <Header /> 
        <ScrollToTopButton />
        <About />
        <Popular />
        <Services />
        <Masters />
        <OurWork />
        <Contacts />
        <Footer />
      </div>
  );
}

