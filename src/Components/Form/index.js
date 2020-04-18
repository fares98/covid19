import React, { useState } from "react";
import { createBrowserHistory } from "history";

import data from "./data";
import "./form.css";

const Form = () => {
  const [id, setId] = useState("");
  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const [phone, setPhone] = useState("");
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const [mobile, setMobile] = useState("");
  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };

  const [governorate, setGovernorate] = useState("");
  const handleChangeGovernorate = (event) => {
    setGovernorate(event.target.value);
  };

  const [city, setCity] = useState("");
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    await event.preventDefault();
    const { push } = await createBrowserHistory();

    const data = await { id, phone, mobile, governorate, city };
    await localStorage.setItem("userInfo", JSON.stringify(data));

    await push("/questions");
    await window.location.reload();
  };

  return (
    <form className="about-form" onSubmit={handleSubmit}>
      <input
        className="about-form__input full-width"
        type="text"
        placeholder="رقم الهوية"
        value={id}
        onChange={handleChangeId}
        required
      />

      <input
        className="about-form__input half-width "
        type="text"
        placeholder="رقم الهاتف"
        value={phone}
        onChange={handleChangePhone}
        required
      />

      <input
        className=" about-form__input half-width"
        type="text"
        placeholder="رقم الموبايل"
        value={mobile}
        onChange={handleChangeMobile}
      />

      <select
        className="about-form__input full-width"
        value={governorate}
        onChange={handleChangeGovernorate}
        required
      >
        {data.map((ele, index) => (
          <option value={ele.value} key={index}>
            {ele.name ? ele.name : ele.value}
          </option>
        ))}
      </select>

      <input
        className="about-form__input full-width"
        type="text"
        placeholder="المدينة"
        value={city}
        onChange={handleChangeCity}
        required
      />

      <input type="submit" value="التالي" />
    </form>
  );
};

export default Form;
