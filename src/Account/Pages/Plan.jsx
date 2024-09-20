import React, { useState, useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

import LogoPrimary from "../../Assets/logo-primary.png";

import FreeDescription from "./Plan/FreeDescription";
import ProDescription from "./Plan/ProDescription";
import BusinessDescription from "./Plan/BusinessDescription";

export const plans = [
  {
    name: "free",
    description: <FreeDescription />,
  },
  {
    name: "fro",
    link: "",
    priceID: "",
    description: <ProDescription />,
  },
  {
    name: "business",
    link: "",
    priceID: "",
    description: <BusinessDescription />,
  },
]

const Plan = () => {
  const [profile, setProfile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
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
          <div className="form__top-text">
            <div className="form__top-title">Choose Your Plan</div>
            <div className="form__top-subtitle">
              Select the perfect plan for your needs and get started with full
              access today.
            </div>
          </div>
        </div>

        <div className="form__plan__small">
          <div className="form__left">
            <div className="form__input-box">
              <label htmlFor="name">Chose your plan</label>

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
                        Ideal for Growing businesses that need more features and
                        support.
                      </div>
                    </div>
                    <div className="input__plan__small-price">
                      $15
                      <br />
                      <span>per month</span>
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
                        Ideal for Established businesses requiring extensive
                        resources and premium support.
                      </div>
                    </div>
                    <div className="input__plan__small-price">
                      $35
                      <br />
                      <span>per month</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="from__plan__description">
              {selectedPlan === "free" && <FreeDescription />}
              {selectedPlan === "pro" && <ProDescription />}
              {selectedPlan === "business" && <BusinessDescription />}
            </div>
          </div>

          <div className="form__right">
            {error && <div className="auth__form__error">{error}</div>}
            <button onClick={HandleSubmit} type="submit" className="btn-dark">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
