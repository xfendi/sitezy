import React from "react";
import { Link, Navigate } from "react-router-dom";

import LogoPrimary from "../../../Assets/logo-primary.png";
import { UserDocs } from "../../../Context/UserDocsContext";

const Index = () => {
  const { companyId } = UserDocs();

  if (companyId) {
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
          <Link to="/admin/setup/company/join" className="btn-dark">
            Join
          </Link>
          <Link to="/admin/setup/company/create" className="btn-primary">
            Create
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
