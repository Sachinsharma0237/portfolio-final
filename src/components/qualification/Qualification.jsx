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
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
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
                  Delhi Institute of Tool Engineering - Delhi, &nbsp;
                  &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2014 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Apple Inc- Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>
            </div> */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Senior Secondary Education
                </h3>
                <span className="qualification__subtitle">
                  Mount Olivet Sr. Sec. School - Delhi &nbsp; &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2011 - 2013
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School</h3>
                <span className="qualification__subtitle">
                  B.R. Tyagi School - Delhi &nbsp; &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2010 - 2011
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
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
             <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Senior Engineer</h3>
                <span className="qualification__subtitle">
                  Coforge Ltd. - Greater Noida, U.P. &nbsp;
                  &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Apr, 2026 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Instant System Pvt. Ltd. - Noida, U.P. &nbsp; &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Aug, 2022 - Feb, 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Amarujala Web Services Pvt. Ltd. - Noida, U.P. &nbsp;
                  &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  July, 2021 - July, 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  RV Online Gaming Pvt. Ltd. - Gurugram, Haryana &nbsp;
                  &#127470;&#127475;
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  April, 2021 - June, 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2018
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
