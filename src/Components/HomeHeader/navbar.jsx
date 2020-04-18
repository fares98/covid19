import React, { useState } from "react";

import "./nav.css";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="nav">
      <h2 className="nav__title">كوفيد 19</h2>

      <span
        className={menuActive ? "nav__menu-icon menu-active" : "nav__menu-icon"}
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div
        className={
          menuActive ? "nav__link-container menu-active" : "nav__link-container"
        }
      >
        {[
          { val: "احصائيات كورونا في فلسطين", id: "statistics" },
          { val: "حول كورونا", id: "corona" },
          { val: "لجان الطوارئ", id: "emergency" },
        ].map((ele, index) => (
          <a
            href={`#${ele.id}`}
            key={index}
            className="nav__link"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            {ele.val}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
