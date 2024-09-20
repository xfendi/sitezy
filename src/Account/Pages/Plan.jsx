import React, { useState, useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

import LogoPrimary from "../../Assets/logo-primary.png";
import Light from "../../Assets/light.png";
import Dark from "../../Assets/dark.png";
import System from "../../Assets/system.png";

const Plan = () => {
  const [profile, setProfile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user } = UserAuth();
  const userId = user.uid;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await setDoc(doc(db, "profiles", userId), {
        plan: selectedPlan,
        createdAt: new Date(),
      });

      navigate("/account/setup/profile");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const HandlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setActiveButton(plan);
  };

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
          <div className="form__top-title">Choose Your Plan</div>
          <div className="form__top-subtitle">
            Select the perfect plan for your needs and get started with full
            access today.
          </div>
        </div>

        <div className="form form__left">
          <div className="form__input-box">
            <label htmlFor="name">Chose your plan</label>

            <div className="form__input__select__image-container">
              <div className="theme__box">
                <button
                  type="button"
                  id="dark"
                  className={
                    activeButton === "dark"
                      ? "active profile__theme__button profile__theme__button-dark"
                      : "profile__theme__button profile__theme__button-dark"
                  }
                  onClick={() => HandlePlanClick("dark")}
                >
                  <img src={Dark} alt="" />
                </button>
                <label htmlFor="dark">Dark</label>
              </div>

              <div className="theme__box">
                <button
                  type="button"
                  id="light"
                  className={
                    activeButton === "light"
                      ? "active profile__theme__button profile__theme__button-light"
                      : "profile__theme__button profile__theme__button-light"
                  }
                  onClick={() => HandlePlanClick("light")}
                >
                  <img src={Light} alt="" />
                </button>
                <label htmlFor="light">Light</label>
              </div>

              <div className="theme__box">
                <button
                  type="button"
                  id="system"
                  className={
                    activeButton === "system"
                      ? "active profile__theme__button profile__theme__button-system"
                      : "profile__theme__button profile__theme__button-system"
                  }
                  onClick={() => HandlePlanClick("system")}
                >
                  <img src={System} alt="" />
                </button>
                <label htmlFor="system">System</label>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={HandleSubmit} className="form__right form">
          {error && <div className="auth__form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Proceed to payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Plan;
