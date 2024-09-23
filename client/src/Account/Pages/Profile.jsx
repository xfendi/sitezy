import React, { useState, useEffect } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { auth, db, storage } from "../../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

import LogoPrimary from "../../Assets/logo-primary.png";
import Light from "../../Assets/light.png";
import Dark from "../../Assets/dark.png";
import System from "../../Assets/system.png";

const Profile = () => {
  const [profile, setProfile] = useState(false);

  const [activeButton, setActiveButton] = useState("");

  const colors = [
    "#000000",
    "#3F3FBF",
    "#5C2D91",
    "#8A2BE2",
    "#00BFFF",
    "#008080",
    "#00FF00",
  ];

  const [color, setColor] = useState("");
  const [theme, setTheme] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const [error, setError] = useState("");

  const navigate = useNavigate();

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
    try {
      const fileRef = ref(storage, `profiles/${userId}`);
      await uploadBytes(fileRef, selectedFile);
      const photoURL =
        (await getDownloadURL(fileRef)) || "https://i.imgur.com/4tBUxz7.png";

      updateProfile(user, { photoURL });

      await setDoc(doc(db, "profiles", userId), {
        color: color || "#6e48eb",
        theme: theme || "light",
        createdAt: new Date(),
      });

      navigate("/account/setup/company");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const HandleSkip = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await setDoc(doc(db, "profiles", userId), {
        color: "#6e48eb",
        theme: "light",
        createdAt: new Date(),
      });
      await updateProfile(auth.currentUser, {
        photoURL: "https://i.imgur.com/4tBUxz7.png",
      });
      navigate("/account/setup/company");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  
  const findProfileByUserId = async (userId) => {
    const profileRef = doc(db, "profiles", userId);

    try {
      const docSnap = await getDoc(profileRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("Dokument profilu nie istnieje");
        return null;
      }
    } catch (error) {
      console.error("Błąd podczas pobierania profilu:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const userProfile = await findProfileByUserId(userId);
          if (userProfile) {
            console.log(userProfile);
            setProfile(userProfile);
          } else {
            console.log("Profil użytkownika nie został znaleziony.");
            setProfile(false);
          }
        } catch (err) {
          console.log("Błąd podczas wyszukiwania profilu.");
        }
      } else {
        console.log("Użytkownik nie jest zalogowany.");
      }
    };

    fetchProfile();
  }, [userId]);

  if (profile.color) {
    return <Navigate to="/account/setup/company" />;
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
            <div className="form__top-title">Customize Your Account</div>
            <div className="form__top-subtitle">
              Create your own admin design for better experirnce!
            </div>
          </div>
        </div>

        <form onSubmit={HandleSubmit} className="form">
          <div className="form__input-box">
            <label>Chose your color</label>

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

          <div className="form__cont">
            <div className="form__input-box">
              <label htmlFor="name">Upload a profile picture</label>

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
                <label htmlFor="file" className="file-input__label">
                  Upload picture
                </label>
              </div>
            </div>
          </div>

          <div className="form__input-box">
            <label htmlFor="name">Chose your theme</label>

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
                  <img src={Dark} alt="" />
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
                  <img src={Light} alt="" />
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
                  <img src={System} alt="" />
                </button>
                <label htmlFor="system">System</label>
              </div>
            </div>
          </div>

          {error && <div className="auth__form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Create
          </button>
        </form>

        <div className="form__footer">
          <div className="form__footer-text">
            Do it later and use default deisgn!{" "}
            <button onClick={HandleSkip} href="/account/setup/company">
              Skip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
