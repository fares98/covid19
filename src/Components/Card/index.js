import React from "react";

import "./card.css";

const Card = ({ title, desc, iconLink }) => {
  return (
    <section className="card">
      <div className="card__img">
        <img src={iconLink} alt="" />
      </div>

      <article className="card__text">
        <h4 className="card__text__title">{title}</h4>
        <p>{desc}</p>
      </article>
    </section>
  );
};

export default Card;
