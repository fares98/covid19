import React, { useContext } from "react";

import Nav from "./navbar";
import HomeImg from "../../assets/Group_83.png";
import { HomeContext } from "../../context/home";
import "./homeHeader.css";

const HomeHeader = () => {
  const coronaData = useContext(HomeContext);

  return (
    <header className="header">
      <Nav />
      <section className="header__main-content">
        <div className="header__text">
          <h4>الزم بيتك</h4>
          <p>ارتدي القناع و احفظ حياتك و حياة الناس</p>
          <a href="/about" className="pulse">
            افحص
          </a>
        </div>

        <div className="header__img-container">
          <img src={HomeImg} alt="" />
        </div>
      </section>

      <section className="header__card-container" id="statistics">
        <div className="header__one-card">
          <p>كل الحالات</p>
          <span>{coronaData.TotalCases}</span>
        </div>

        <div className="header__one-card">
          <p>الحالات النشطة</p>
          <span>{coronaData.TotalActiveCases}</span>
        </div>

        <div className="header__one-card">
          <p>الحالات المتعافية</p>
          <span>{coronaData.TotalRecovery}</span>
        </div>

        <div className="header__one-card">
          <p>الحالات المتوفية</p>
          <span>{coronaData.TotalDeath}</span>
        </div>
      </section>
    </header>
  );
};

export default HomeHeader;
