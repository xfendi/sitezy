import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

import LogoPrimary from "../../Assets/logo-primary.png";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const HandleCheck = (e) => {
    setType(e.target.value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (password === confirmPassword) {
        await createUser(email, password, name, type);
        navigate("/account/setup/profile");
      } else {
        setError("Passwords do not match");
        return;
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <section className="form__section">
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
            <div className="form__top-title">Sign up</div>
            <div className="form__top-subtitle">
              Enter your details below to create your account and get started!
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
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="enter..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
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
          <div className="form__input-box">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              name="cpasword"
              id="cpasword"
              placeholder="confirm password..."
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="form__input-box">
            <label htmlFor="">Account Type</label>
            <div className="form__radio-container">
              <label>
                <input
                  type="radio"
                  name="type"
                  required
                  value="individual"
                  onChange={HandleCheck}
                  checked={type === "individual"}
                ></input>
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="work"
                  onChange={HandleCheck}
                  checked={type === "work"}
                ></input>
                Work
              </label>
            </div>
          </div>

          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Sign Up
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Already have account? <a href="/auth/login">Login</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
