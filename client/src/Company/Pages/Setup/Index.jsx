import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import { auth, db } from "../../../firebase";

import LogoPrimary from "../../../Assets/logo-primary.png";

const Index = () => {
  const [company, setCompany] = useState(false);

  const userId = auth.currentUser.uid;

  const findCompanyAndRoleByUserId = async (userId) => {
    const companiesRef = collection(db, "companies");

    try {
      const querySnapshot = await getDocs(companiesRef);
      let companyName = null;
      querySnapshot.forEach((doc) => {
        const companyData = doc.data();
        if (companyData.members && companyData.members[userId]) {
          companyName = companyData.name;
          return; // Przerywa pętlę po znalezieniu pierwszej pasującej firmy
        }
      });

      if (companyName) {
        return {
          companyName,
        };
      } else {
        return null; // Brak danych
      }
    } catch (error) {
      console.error("Błąd podczas wyszukiwania firmy:", error);
      return null;
    }
  };

  findCompanyAndRoleByUserId(userId).then((result) => {
    if (result) {
      setCompany(true);
    } else {
      return;
    }
  });

  if (company) {
    return <Navigate to="/admin" />;
  }

  return (
    <section className="auth" id="auth">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div
        className="form form__box"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="100"
      >
        <div className="form__top">
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-text">
            <div className="form__top-title">Your Company</div>
            <div className="form__top-subtitle">
              Join existing company or crete new one!
            </div>
          </div>
        </div>
        <div className="form__buttons">
          <a href="/company/setup/join" className="btn-dark">
            Join
          </a>
          <a href="/company/setup/create" className="btn-primary">
            Create
          </a>
        </div>
        <div className="form__footer">
          <div className="form__footer-text">
            Work without company? <a href="/admin">Skip</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
