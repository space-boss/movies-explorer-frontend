import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import Header from '../Header/Header';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';



function Main() {
  return (
    <main className="content">
      <title>Главная страница</title>
      <Promo />
      <Header />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;