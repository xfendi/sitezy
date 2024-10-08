import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import LogoPrimary from "../../../Assets/logo-primary.png";
import { auth, db } from "../../../firebase";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { UserDocs } from "../../../Context/UserDocsContext";

const Join = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const { companyId } = UserDocs();
  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    setError("");
    try {
      const q = query(
        collection(db, "companies"),
        where("code", "==", parseInt(code))
      );
      const querySnapshot = await getDocs(q);

      console.log(code);

      if (querySnapshot.empty) {
        setError("Invalid code entered!");
        console.log("Invalid code entered!");
        return;
      }

      const companyDoc = querySnapshot.docs[0];
      const companyRef = companyDoc.ref;

      await updateDoc(companyRef, {
        [`members.${userId}`]: "member",
      });

      console.log("Pomyslnie dołączono do firmy!");
      navigate("/admin");
    } catch (e) {
      setError(e.message);
      console.error("Błąd podczas dołączania do firmy:", e);
    }
  };

  if (companyId) {
    return <Navigate to="/admin" />;
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
            <div className="form__top-title">Join Existing Company</div>
            <div className="form__top-subtitle">
              Enter invite code to join existing company!
            </div>
          </div>
        </div>

        <form onSubmit={HandleSubmit} className="form">
          <div className="form__input-box">
            <label htmlFor="code">Code</label>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="code here..."
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              required
            />
          </div>

          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Submit
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Want to create new company?{" "}
              <a href="/account/setup/company/create">Create</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Join;
