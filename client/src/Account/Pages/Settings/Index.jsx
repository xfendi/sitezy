import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../Context/AuthContext";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
  verifyBeforeUpdateEmail,
} from "firebase/auth";

import LogoPrimary from "../../../Assets/logo-primary.png";

const Index = () => {
  const [isModal, setIsModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user } = UserAuth();

  const openModal = () => {
    if (!name && !newPassword && !email) {
      setError("Please fill in any field.");
      return;
    } else if (email === user.email) {
      setError("Email cannot be the same as your current email.");
      return;
    } else if (!user.emailVerified) {
      setError("Please verify your email address before updating profile.");
      return;
    }

    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setEmail("");
    setPassword("");
    setNewPassword("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setSuccess("");

      const credentials = EmailAuthProvider.credential(
        user.email,
        password || prompt("Please confirm your password")
      );

      await reauthenticateWithCredential(user, credentials);

      if (name) {
        await updateProfile(user, { displayName: name });
        setSuccess("Profile updated successfully.");
      }

      if (email) {
        await verifyBeforeUpdateEmail(user, email);
        setSuccess(
          "Verification email sent. The email will be updated once it's verified."
        );
      }

      if (newPassword) {
        await updatePassword(user, newPassword);
        setSuccess("Password updated successfully.");
      }

      console.log(success);
      closeModal();
    } catch (e) {
      closeModal();
      setError(e.message);
      console.log(e);
    }
  };

  return (
    <div className="settings-container form">
      <div className="settings__setting flex items-center !pt-0">
        <div className="setting_left w-1/3">
          <div className="setting-title font-semibold">Name</div>
          <div className="setting-description">
            Update your account Display Name.
          </div>
        </div>
        <div className="setting_right w-full">
          <div className="form__input-box admin !w-1/3">
            <input
              className="!bg-neutral-50 dark:!bg-neutral-900"
              type="text"
              name="name"
              id="name"
              placeholder="New Name ..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="settings__setting flex items-center">
        <div className="setting_left w-1/3">
          <div className="setting-title font-semibold">Email</div>
          <div className="setting-description">
            Update your account email address.
          </div>
        </div>
        <div className="setting_right w-full">
          <div className="form__input-box admin !w-1/3">
            <input
              className="!bg-neutral-50 dark:!bg-neutral-900"
              type="email"
              name="email"
              id="email"
              placeholder={user.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="settings__setting flex items-center">
        <div className="setting_left w-1/3">
          <div className="setting-title font-semibold">Password</div>
          <div className="setting-description">
            Change your account password.
          </div>
        </div>
        <div className="setting_right w-full">
          <div className="form__input-box admin !w-1/3">
            <input
              className="!bg-neutral-50 dark:!bg-neutral-900"
              type="password"
              name="newpassword"
              id="newpassword"
              placeholder="New Password ..."
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="settings-bottom w-full flex items-center justify-end">
        <div className="form__success">{success}</div>
        <div className="form__error">{error}</div>
        <Link to="/admin" className="btn-main">
          Cancel
        </Link>
        <button type="button" onClick={openModal} className="btn-primary">
          Save changes
        </button>
      </div>

      <div
        className={`form-modal form__box absolute m-0 ${isModal ? "show" : ""}`}
      >
        <div className="form__top">
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-text">
            <div className="form__top-title">Password</div>
            <div className="form__top-subtitle">
              Input your password to change account settings.
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="form-modal_main form"
        >
          <div className="form__input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password Here ..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Submit
          </button>
          <button type="button" onClick={closeModal} className="btn-main">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
