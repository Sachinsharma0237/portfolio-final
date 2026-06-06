import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Product Developer</h3>
              <p className="services__modal-description">
                Service with more than 5+ yearsof experience. Providing quality
                work to companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">Backend Development</p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I make APIs with technologies nestJs, nodeJS, etc.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I made architecture for the product
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Development
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">UI/UX Development</h3>
              <p className="services__modal-description">
                Service with more than 5+ yearsof experience. Providing quality
                work to companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I develop the frontend using reactJs.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I create Ux element interactions.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Service with more than 5+ yearsof experience. Providing quality
                work to companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I worked in technologies like NodeJS, NestJs, Typescript.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I worked in databases like MongoDB, mySql, etc.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I worked in AWS, jenkins to deploy apps.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </i>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                    <p className="services__modal-info">
                      I'm good with algorithms.
                    </p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
