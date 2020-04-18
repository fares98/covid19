import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowUpward } from "@material-ui/icons";

import HomeHeader from "../../Components/HomeHeader";
import Loading from "../../Components/Loading";
import HomeProvider from "../../context/home";
import img1 from "../../assets/coronatransmission.jpg";
import img2 from "../../assets/coronasymptoms.jpg";
import img3 from "../../assets/coronaprevent.jpg";
import data from "../../Components/Form/data";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [coronaData, setCoronaData] = useState({});
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [governorate, setGovernorate] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 624 ? setVisibleBtn(true) : setVisibleBtn(false);
    });
  });

  useEffect(() => {
    axios
      .get("https://www.corona.ps/API/summary")
      .then((res) => {
        setCoronaData(res.data.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  const handleChangeGovernorate = (event) => {
    setGovernorate(event.target.value);
  };

  return (
    <HomeProvider value={coronaData}>
      {loading ? (
        <Loading />
      ) : (
        <section className="home">
          <HomeHeader />

          <section className="home__about-corona" id="corona">
            <h3>حول فايروس كورونا</h3>
            <p>
              الفايروس يسبب أمراض للثديات و الطيور, يستهدف الفايروس الجهاز
              التنفسي لدى البشر و ينتقل بالعدوى من شخص لاآخر أو عن طريق لمس أسطح
              ملوثة بالفايروس
            </p>

            <div className="home__about-corona__img-container">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </section>

          <section className="home__safe">
            نتعهد بالحفاظ على السرية التامة للبيانات
          </section>

          <section className="home__emergency" id="emergency">
            <h3>أرقام لجان الطوارئ</h3>

            <form>
              <select value={governorate} onChange={handleChangeGovernorate}>
                {data.map((ele, index) => (
                  <option value={ele.value} key={index}>
                    {ele.name ? ele.name : ele.value}
                  </option>
                ))}
              </select>

              <input type="text" placeholder="المدينة" />
            </form>

            <div className="home__emergency-numbers">
              <span>1800-000-888</span>
            </div>
          </section>

          <footer>كوفيد 19 2020 &copy;</footer>

          {visibleBtn && (
            <section
              className="up"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <ArrowUpward />
            </section>
          )}
        </section>
      )}
    </HomeProvider>
  );
};

export default Home;
