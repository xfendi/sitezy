import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

import LogoPrimary from "../../../../Assets/logo-primary.png";
import { auth } from "../../../../firebase";
import { UserDocs } from "../../../../Context/UserDocsContext";

const Success = () => {
  const [sessionId, setSessionId] = useState();

  const { projectId } = UserDocs();
  const navigate = useNavigate();
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "projects/" + projectId);
    onValue(starCountRef, (snapshot) => {
      const userVal = snapshot.val();
      if (userVal) {
        setSessionId(userVal.subscription?.sessionId);
      } else {
        setSessionId("");
      }
    });
  }, [userId, projectId]);

  const handlePaymentSuccess = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/v1/payment-success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: sessionId,
        projectId: projectId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((data) => {
        console.log(data.message);
        navigate(`/admin/project/${projectId}`);
      })
      .catch((e) => {
        console.log(e.error);
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
            style={{ position: "absolute", left: "50%", top: "0" }}
          />
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-text">
            <div className="form__top-title" style={{ color: "green" }}>
              Payment Successful!
            </div>
            <div className="form__top-subtitle">
              Your purchase has been completed. <br />
              Welcome to your new plan on Sitezy!
            </div>
          </div>
        </div>

        <form className="form">
          <button onClick={(e) => handlePaymentSuccess(e)} className="btn-dark">
            Continue
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Learn More About Plans! <a href="/admin/help">Help</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Success;
