import React, { useState } from "react";
import { UserDocs } from "../../../Context/UserDocsContext";

import LogoPrimary from "../../../Assets/logo-primary.png";

import FreeDescription from "./Plan/FreeDescription";
import ProDescription from "./Plan/ProDescription";
import BusinessDescription from "./Plan/BusinessDescription";
import { Navigate } from "react-router-dom";

export const plans = [
  {
    name: "Free",
    desc: "Perfect for getting started!",
    type: "month",
    description: <FreeDescription />,
  },
  {
    name: "Pro",
    desc: "Ideal for Growing businesses!",
    type: "month",
    price: "15",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_cN20428Me3B730Q4gg"
        : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1Q1E3ZLfGhLqHCXO8utJDP5Y"
        : "",
    description: <ProDescription />,
  },
  {
    name: "Business",
    desc: "Ideal for Established businesses!",
    type: "month",
    price: "35",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_28oeYW5A23B79pefZ2"
        : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1Q1RzLLfGhLqHCXO20D1or0T"
        : "",
    description: <BusinessDescription />,
  },

  {
    name: "Free",
    desc: "Perfect for getting started!",
    type: "year",
    description: <FreeDescription />,
  },
  {
    name: "Pro",
    desc: "Ideal for Growing businesses!",
    type: "year",
    price: "150",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_28o186bYq2x38laeUW"
        : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1Q1RrULfGhLqHCXOrrnYfBDZ"
        : "",
    description: <ProDescription />,
  },
  {
    name: "Business",
    desc: "Ideal for Established businesses!",
    type: "year",
    price: "350",
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_fZebMK9Qi5Jf1WM147"
        : "",
    priceID:
      process.env.NODE_ENV === "development"
        ? "price_1Q1RzhLfGhLqHCXO6p6Fq6w5"
        : "",
    description: <BusinessDescription />,
  },
];

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState();
  const [isTime, setIsTime] = useState();
  const [error, setError] = useState("");

  const { subscription, selectedProject } = UserDocs();

  const HandleSubmit = async (plan) => {
    if (!selectedPlan) {
      setError("Choose Your Plan");
      return;
    } else if (selectedPlan.link === undefined) {
      setError("Free Plan Selected");
      return;
    }
    console.log("Plan:", selectedPlan.name, "| Type:", selectedPlan.type);

    fetch("http://localhost:5000/api/v1/create-subscription-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ plan: plan, projectId: selectedProject.id }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ session }) => {
        window.location = session.url;
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const HandlePlanClick = (plan) => {
    setSelectedPlan(plan);
    console.log("Plan:", plan.name, "| Type:", plan.type);
  };

  const HandleToggle = () => {
    setIsTime((prev) => !prev);
    setSelectedPlan(null);
  };

  if (subscription.planName || !selectedProject.id) {
    return <Navigate to="/admin" />;
  }

  const MonthPlansComponent = () => {
    return (
      <>
        <button
          type="button"
          id="system"
          className={
            selectedPlan?.name === plans[0].name
              ? "active profile__plan__button"
              : "profile__plan__button"
          }
          onClick={() => HandlePlanClick(plans[0])}
        >
          <div className="input__plan__small">
            <div className="input__plan__small-text">
              <div className="input__plan__small-title">
                {plans[0].name} Plan
              </div>
              <div className="input__plan__small-description">
                {plans[0].desc}
              </div>
            </div>
            <div className="input__plan__small-price">FREE</div>
          </div>
        </button>

        <button
          type="button"
          id="system"
          className={
            selectedPlan?.name === plans[1].name
              ? "active profile__plan__button"
              : "profile__plan__button"
          }
          onClick={() => HandlePlanClick(plans[1])}
        >
          <div className="input__plan__small">
            <div className="input__plan__small-text">
              <div className="input__plan__small-title">
                {plans[1].name} Plan
              </div>
              <div className="input__plan__small-description">
                {plans[1].desc}
              </div>
            </div>
            <div className="input__plan__small-price">
              ${plans[1].price}
              <br />
              <span>per {plans[1].type}</span>
            </div>
          </div>
        </button>

        <button
          type="button"
          id="system"
          className={
            selectedPlan?.name === plans[2].name
              ? "active profile__plan__button"
              : "profile__plan__button"
          }
          onClick={() => HandlePlanClick(plans[2])}
        >
          <div className="input__plan__small">
            <div className="input__plan__small-text">
              <div className="input__plan__small-title">
                {plans[2].name} Plan
              </div>
              <div className="input__plan__small-description">
                {plans[2].desc}
              </div>
            </div>
            <div className="input__plan__small-price">
              ${plans[2].price}
              <br />
              <span>per {plans[2].type}</span>
            </div>
          </div>
        </button>
      </>
    );
  };

  const YearPlansComponent = () => {
    return (
      <>
        <button
          type="button"
          id="system"
          className={
            selectedPlan?.name === plans[3].name
              ? "active profile__plan__button"
              : "profile__plan__button"
          }
          onClick={() => HandlePlanClick(plans[3])}
        >
          <div className="input__plan__small">
            <div className="input__plan__small-text">
              <div className="input__plan__small-title">
                {plans[3].name} Plan
              </div>
              <div className="input__plan__small-description">
                {plans[3].desc}
              </div>
            </div>
            <div className="input__plan__small-price">FREE</div>
          </div>
        </button>

        <button
          type="button"
          id="system"
          className={
            selectedPlan?.name === plans[4].name
              ? "active profile__plan__button"
              : "profile__plan__button"
          }
          onClick={() => HandlePlanClick(plans[4])}
        >
          <div className="input__plan__small">
            <div className="input__plan__small-text">
              <div className="input__plan__small-title">
                {plans[4].name} Plan
              </div>
              <div className="input__plan__small-description">
                {plans[4].desc}
              </div>
            </div>
            <div className="input__plan__small-price">
              ${plans[4].price}
              <br />
              <span>per {plans[4].type}</span>
            </div>
          </div>
        </button>

        <button
          type="button"
          id="system"
          className={
            selectedPlan?.name === plans[5].name
              ? "active profile__plan__button"
              : "profile__plan__button"
          }
          onClick={() => HandlePlanClick(plans[5])}
        >
          <div className="input__plan__small">
            <div className="input__plan__small-text">
              <div className="input__plan__small-title">
                {plans[5].name} Plan
              </div>
              <div className="input__plan__small-description">
                {plans[5].desc}
              </div>
            </div>
            <div className="input__plan__small-price">
              ${plans[5].price}
              <br />
              <span>per {plans[5].type}</span>
            </div>
          </div>
        </button>
      </>
    );
  };

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
              {isTime ? <YearPlansComponent /> : <MonthPlansComponent />}
            </div>

            {/* YEAR / MONTH */}
          </div>
          <div className="from__plan__description">
            {selectedPlan?.name === "Free" && <FreeDescription />}
            {selectedPlan?.name === "Pro" && <ProDescription />}
            {selectedPlan?.name === "Business" && <BusinessDescription />}
          </div>

          {error && <div className="form__error">{error}</div>}
          <button
            onClick={() => HandleSubmit(Number(selectedPlan.price))}
            type="submit"
            className="btn-dark"
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plan;
