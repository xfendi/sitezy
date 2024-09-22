import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [sessionId, setSessionId] = useState();

  const { user } = UserAuth();
  const userId = user.uid;

  const navigate = useNavigate();

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
    <div>
      <h1>Subscribed successfully!</h1>
      <p>Your subscription ID is: {sessionId}</p>
      <p>Please remember it for future reference.</p>
      <p>Thank you for choosing Sitezy!</p>
      <button onClick={() => HandleSuccess()}>Procees</button>
    </div>
  );
};

export default Success;
