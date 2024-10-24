import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../Context/AuthContext";

import Light from "../../../Assets/light.png";
import Dark from "../../../Assets/dark.png";
import System from "../../../Assets/system.png";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { db, storage } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [color, setColor] = useState("");
  const [theme, setTheme] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const colors = [
    "#000000",
    "#3F3FBF",
    "#5C2D91",
    "#8A2BE2",
    "#00BFFF",
    "#008080",
    "#00FF00",
  ];

  const { user } = UserAuth();
  const userId = user.uid;

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      if (!theme && !color && !selectedFile) {
        setError("Please select any field.");
        return;
      }

      if (theme) {
        await updateDoc(doc(db, "profiles", userId), {
          theme: theme,
        });
        setSuccess("Updated dashboard Theme.");
      }

      if (color) {
        await updateDoc(doc(db, "profiles", userId), {
          color: color,
        });
        setSuccess("Updated Primary Color.");
      }

      if (selectedFile) {
        const fileRef = ref(storage, `profiles/${userId}`);
        await uploadBytes(fileRef, selectedFile);
        const photoURL = await getDownloadURL(fileRef);
        await updateProfile(user, { photoURL });
        setSuccess("Updated Profile Picture.");
      }

      setTheme();
      setSelectedFile();
      setColor();
      setPreview();
      window.location.reload();
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={(e) => HandleSubmit(e)} className="settings-container form">
      <div className="settings__setting flex items-center !pt-0">
        <div className="setting_left w-1/3">
          <div className="setting-title font-semibold">Primary Color</div>
          <div className="setting-description">
            Chose your new dashboard primary color.
          </div>
        </div>
        <div className="setting_right w-full">
          <div className="form__input-box admin">
            <div className="color__selector-container">
              <div className="color__selector">
                {colors.map((colo, index) => (
                  <div
                    className="color__selector-color-box"
                    key={index}
                    style={{
                      border:
                        color === colo
                          ? `2px solid ${colo}`
                          : "2px solid transparent",
                    }}
                  >
                    <div
                      className="color__selector-color"
                      key={index}
                      onClick={() => setColor(colo)}
                      style={{ backgroundColor: colo }}
                    />
                  </div>
                ))}
              </div>

              <input
                className="!bg-neutral-50 dark:!bg-neutral-900"
                type="text"
                value={color}
                placeholder="#FFFFFF"
                style={{ width: "100px" }}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="settings__setting flex items-center">
        <div className="setting_left w-1/3">
          <div className="setting-title font-semibold">Profile Picture</div>
          <div className="setting-description">
            Update your account profile picture.
          </div>
        </div>
        <div className="setting_right w-full">
          <div className="form__cont">
            <div className="form__input-box admin">
              <div className="file-input">
                {selectedFile && (
                  <img src={preview} alt="" className="file-input__preview" />
                )}
                <input
                  type="file"
                  id="file"
                  className="file"
                  onChange={onSelectFile}
                />
                <label htmlFor="file" className="file-input__label admin">
                  Upload picture
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings__setting flex items-center">
        <div className="setting_left w-1/3">
          <div className="setting-title font-semibold">Dashboard Theme</div>
          <div className="setting-description">
            Chose your new dashboard theme.
          </div>
        </div>
        <div className="setting_right w-full">
          <div className="form__input-box admin">
            <div className="form__input__select__image-container">
              <div className="theme__box">
                <button
                  type="button"
                  id="dark"
                  className={
                    theme === "dark"
                      ? "active profile__theme__button profile__theme__button-dark"
                      : "profile__theme__button profile__theme__button-dark"
                  }
                  onClick={() => setTheme("dark")}
                >
                  <img src={Dark} alt="" width="100px" />
                </button>
                <label htmlFor="dark">Dark</label>
              </div>

              <div className="theme__box">
                <button
                  type="button"
                  id="light"
                  className={
                    theme === "light"
                      ? "active profile__theme__button profile__theme__button-light"
                      : "profile__theme__button profile__theme__button-light"
                  }
                  onClick={() => setTheme("light")}
                >
                  <img src={Light} alt="" width="100px" />
                </button>
                <label htmlFor="light">Light</label>
              </div>

              <div className="theme__box">
                <button
                  type="button"
                  id="system"
                  className={
                    theme === "system"
                      ? "active profile__theme__button profile__theme__button-system"
                      : "profile__theme__button profile__theme__button-system"
                  }
                  onClick={() => setTheme("system")}
                >
                  <img src={System} alt="" width="100px" />
                </button>
                <label htmlFor="system">System</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-bottom w-full flex items-center justify-end">
        <div className="form__success">{success}</div>
        <div className="form__error">{error}</div>
        <Link to="/admin" className="btn-main">
          Cancel
        </Link>
        <button type="submit" className="btn-primary">
          Save changes
        </button>
      </div>
    </form>
  );
};

export default Profile;
