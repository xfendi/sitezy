import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { collection, addDoc, where, query, getDocs } from "firebase/firestore";

import { db, storage } from "../../../firebase";

import LogoPrimary from "../../../Assets/logo-primary.png";

import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Create = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const { user } = UserAuth();

  const navigate = useNavigate();

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

  const GenerateCode = async () => {
    let isUnique = false;
    let verificationCode;

    while (!isUnique) {
      verificationCode = Math.floor(100000 + Math.random() * 900000);

      const q = query(collection(db, "companies"), where("code", "==", verificationCode))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      if (querySnapshot.empty) {
        isUnique = true;
      }
    }

    return verificationCode;
  };

  const HandleSubmit = async (e) => {
    setError("");
    try {
      const verificationCode = await GenerateCode();
      const fileRef = ref(storage, `companies/${name}`);
      await uploadBytes(fileRef, selectedFile);
      const photoURL =
        (await getDownloadURL(fileRef)) || "https://i.imgur.com/4tBUxz7.png";

      await addDoc(collection(db, "companies"), {
        name: name,
        createdAt: new Date(),
        photoURL: photoURL,
        code: verificationCode,
        members: {
          [user.uid]: "owner",
        },
      });
      navigate("/admin/setup/company/plan");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
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
            <div className="form__top-title">Create Your Company</div>
            <div className="form__top-subtitle">
              Enter details to create your first company!
            </div>
          </div>
        </div>

        <form onSubmit={HandleSubmit} className="form">
          <div className="form__input-box">
            <label htmlFor="name">Company Name</label>
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

          <div className="form__cont">
            <div className="form__input-box">
              <label htmlFor="name">Upload a company picture</label>

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

          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Create
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Want to join existing company?{" "}
              <a href="/account/setup/company/join">Join</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Create;
