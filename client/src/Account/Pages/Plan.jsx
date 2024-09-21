import React, { useState, useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

import LogoPrimary from "../../Assets/logo-primary.png";

import FreeDescription from "./Plan/FreeDescription";
import ProDescription from "./Plan/ProDescription";
import BusinessDescription from "./Plan/BusinessDescription";

export const mplans = [
  {
    name: "free",
    description: <FreeDescription />,
  },
  {
    name: "pro",
    price: "15",
    link: process.env.NODE_ENV === 'development' ? "https://buy.stripe.com/test_cN20428Me3B730Q4gg" : '',
    priceID: process.env.NODE_ENV === 'development' ? "price_1Q1E3ZLfGhLqHCXO8utJDP5Y" : '',
    description: <ProDescription />,
  },
  {
    name: "business",
    price: "35",
    link: process.env.NODE_ENV === 'development' ? "https://buy.stripe.com/test_28oeYW5A23B79pefZ2" : '',
    priceID: process.env.NODE_ENV === 'development' ? "price_1Q1RzLLfGhLqHCXO20D1or0T" : '',
    description: <BusinessDescription />,
  },
];

export const yplans = [
  {
    name: "free",
    description: <FreeDescription />,
  },
  {
    name: "pro",
    price: "150",
    link: process.env.NODE_ENV === 'development' ? "https://buy.stripe.com/test_28o186bYq2x38laeUW" : '',
    priceID: process.env.NODE_ENV === 'development' ? "price_1Q1RrULfGhLqHCXOrrnYfBDZ" : '',
    description: <ProDescription />,
  },
  {
    name: "business",
    price: "350",
    link: process.env.NODE_ENV === 'development' ? "https://buy.stripe.com/test_fZebMK9Qi5Jf1WM147" : '',
    priceID: process.env.NODE_ENV === 'development' ? "price_1Q1RzhLfGhLqHCXO6p6Fq6w5" : '',
    description: <BusinessDescription />,
  },
];

const Plan = () => {
  const [profile, setProfile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [planLink, setPlanLink] = useState();
  const [currentArray, setCurrentArray] = useState(mplans);
  const [isTime, setIsTime] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user } = UserAuth();
  const userId = user.uid;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (planLink === undefined) setError("Choose Your Plan");
      {/*await setDoc(doc(db, "profiles", userId), {
        plan: selectedPlan,
        createdAt: new Date(),
      });*/}
      console.log(planLink)
      console.log(process.env.NODE_ENV)
      window.location.replace(planLink + '?prefilled_email=' + user?.email);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const HandlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setActiveButton(plan);

    console.log(currentArray);
    console.log(plan);

    if (plan === "free") {
      setPlanLink(null);
    } else if (plan === "pro") {
      setPlanLink(currentArray[1].link)
    } else if (plan === "business") {
      setPlanLink(currentArray[2].link)
    }
  };

  const HandleToggle = () => {
    setIsTime(!isTime);
    setCurrentArray(isTime ? mplans : yplans);
  }

  if (profile) {
    return <Navigate to="/account/setup/company" />;
  }

  return (
    <section className="form__section">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div
        className="form__box"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="100"
      >
        <div className="form__top">
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-text">
            <div className="form__top-title">Choose Your Plan</div>
            <div className="form__top-subtitle">
              Select the perfect plan and get started with full access today.
            </div>
          </div>
        </div>

        <div className="form__plan__small">
          <div className="form__input-box">
            <div className="form__plans__time">
              Monthly
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    HandleToggle();
                  }}
                />
                <span className="slider"></span>
              </label>
              Yearly
            </div>

            <div className="form__input__select__image-container plans__small">
              <button
                type="button"
                id="dark"
                className={
                  activeButton === "free"
                    ? "active profile__plan__button"
                    : "profile__plan__button"
                }
                onClick={() => HandlePlanClick("free")}
              >
                <div className="input__plan__small">
                  <div className="input__plan__small-text">
                    <div className="input__plan__small-title">Free Plan</div>
                    <div className="input__plan__small-description">
                      Perfect for getting started!
                    </div>
                  </div>
                  <div className="input__plan__small-price">FREE</div>
                </div>
              </button>

              <button
                type="button"
                id="light"
                className={
                  activeButton === "pro"
                    ? "active profile__plan__button "
                    : "profile__plan__button"
                }
                onClick={() => HandlePlanClick("pro")}
              >
                <div className="input__plan__small">
                  <div className="input__plan__small-text">
                    <div className="input__plan__small-title">Pro Plan</div>
                    <div className="input__plan__small-description">
                      Ideal for Growing businesses!
                    </div>
                  </div>
                  <div className="input__plan__small-price">
                    ${currentArray[1].price}
                    <br />
                    <span>per {isTime ? 'year' : 'month'}</span>
                  </div>
                </div>
              </button>

              <button
                type="button"
                id="system"
                className={
                  activeButton === "business"
                    ? "active profile__plan__button"
                    : "profile__plan__button"
                }
                onClick={() => HandlePlanClick("business")}
              >
                <div className="input__plan__small">
                  <div className="input__plan__small-text">
                    <div className="input__plan__small-title">
                      Business Plan
                    </div>
                    <div className="input__plan__small-description">
                      Ideal for Established businesses!
                    </div>
                  </div>
                  <div className="input__plan__small-price">
                    ${currentArray[2].price}
                    <br />
                    <span>per {isTime ? 'year' : 'month'}</span>
                  </div>
                </div>
              </button>
            </div>

            {/* YEAR / MONTH */}
          </div>
          <div className="from__plan__description">
            {selectedPlan === "free" && <FreeDescription />}
            {selectedPlan === "pro" && <ProDescription />}
            {selectedPlan === "business" && <BusinessDescription />}
          </div>

          {error && <div className="form__error">{error}</div>}
          <button onClick={HandleSubmit} type="submit" className="btn-dark">
            Proceed to payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plan;
