import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

import ConfettiExplosion from "react-confetti-explosion";
import useWindowSize from "react-use/lib/useWindowSize";

import LogoPrimary from "../../../Assets/logo-primary.png";

const Success = () => {
  const [sessionId, setSessionId] = useState();

  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  const { user } = UserAuth();
  const userId = user.uid;

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + userId);
    onValue(starCountRef, (snapshot) => {
      const userVal = snapshot.val();
      if (userVal) {
        setSessionId(userVal.subscription.sessionId);
      } else {
        setSessionId("");
      }
    });
  }, [userId, sessionId]);

  const HandleSuccess = () => {
    fetch("http://localhost:5000/api/v1/payment-success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ sessionId: sessionId, firebaseId: userId }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => {
        console.log(data.message);
        navigate("/account/setup/profile");
      })
      .catch((e) => {
        console.log(e);
      });
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
        <ConfettiExplosion
          force={0.6}
          zIndex={1}
          duration={2500}
          style={{ position: 'absolute', left: '50%', top: '0' }}
        />
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-text">
            <div className="form__top-title" style={{ color: 'green' }} >Payment Successful!</div>
            <div className="form__top-subtitle">
              Your purchase has been completed. <br />
              Welcome to your new plan on Sitezy!
            </div>
          </div>
        </div>

        <form className="form">
          <a href="/account/setup/profile" className="btn-dark">
            Continue
          </a>

          <div className="form__footer">
            <div className="form__footer-text">
              Learn More About Plans! <a href="/help">Help</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Success;
