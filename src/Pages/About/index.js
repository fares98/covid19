import React from "react";

import Card from "../../Components/Card";
import Form from "../../Components/Form";
import Nav from "../../Components/Navbar";
import data from "./data.js";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <header className="about__header">
        <Nav page="about" />
        <article className="about__article">
          <h2 className="about__article-header">
            “ومن أحياها فكأنما أحيا الناس جميعا”
          </h2>
          <p>أختي المواطنة أخي المواطن</p>
          <p>بداية نتمنى لكم ولعائلاتكم الصحة والسلامة</p>
          <p>هل تعلم أن الكشف المبكر هو أفضل طريقة لمكافحة وباء الكورونا</p>
          <p>
            لذلك نرجوا منكم استخدام هذا التطبيق بامانة وشفافية للمساعدة على
            الكشف المبكر
          </p>
        </article>
      </header>

      <div className="about__card-container">
        {data.map((ele, index) => (
          <Card
            title={ele.title}
            desc={ele.desc}
            iconLink={ele.iconLink}
            key={index}
          />
        ))}
      </div>

      <Form />
    </section>
  );
};

export default About;
