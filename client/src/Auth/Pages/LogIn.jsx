import React, { useState } from "react";

import LogoPrimary from "../../Assets/logo-primary.png";

import { UserAuth } from "../../Context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = UserAuth();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      // navigate("/admin");
      window.location.href = "/admin";
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
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
            <div className="form__top-title">Welcome back</div>
            <div className="form__top-subtitle">
              Glad to see you again! Login to your account below
            </div>
          </div>
        </div>

        {/*<div className="form__socials">
          <button className="form__socials-social" onClick={HandleGoogleAuth}>
            <FcGoogle size={15} />
            Continue with Google
          </button>
          <button className="form__socials-social" onClick={HandleGitHubAuth}>
            <FaGithub size={15} />
            Continue with GitHub
          </button>
        </div>*/}

        <form onSubmit={HandleSubmit} className="form">
          <div className="form__input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form__input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="pasword"
              id="pasword"
              placeholder="enter password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>

          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Login
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Dont have an account? <a href="/auth/signup">Sign up for Free</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
