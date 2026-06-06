import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Engineering
                </h3>
                <span className="qualification__subtitle">
                  Delhi Institute of Tool Engineering(govt. college of GGSIPU) -
                  Delhi, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Senior Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  Mount Olivet Sr. Sec. School - Delhi, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2011 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School</h3>
                <span className="qualification__subtitle">
                  B.R. Tyagi School - Delhi, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2011
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  RV Online Gaming Pvt. Ltd. - Gurugram, Haryana, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> april, 2021 - june,
                  2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Amarujala Web Services Pvt. Ltd. - Noida, U.P., India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> july, 2021 - july,
                  2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Instant System Pvt. Ltd. - Noida, U.P., India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> aug, 2022 - feb, 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

             <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Engineer</h3>
                <span className="qualification__subtitle">
                  Coforge - Noida, U.P., India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> apr, 2026 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
