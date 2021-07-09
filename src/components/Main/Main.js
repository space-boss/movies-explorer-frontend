import React from "react";
import "./Main.css";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Technologies from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main() {
  return (
    <>
      <Header />
      <main className="content">
        <title>Главная страница</title>
        <Promo />
        <AboutProject />
        <Technologies />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
