import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import { getDoc, doc, setDoc } from "firebase/firestore";

import { db, storage } from "../../../firebase";

import LogoPrimary from "../../../Assets/logo-primary.png";

import { Link, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserDocs } from "../../../Context/UserDocsContext";

const ProjectCreate = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [type, setType] = useState("");

  const { user } = UserAuth();
  const { updateProjectId } = UserDocs();
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
    let codeid;

    while (!isUnique) {
      const code = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");

      codeid = code;

      const docRef = doc(db, "projects", "SF");
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (!data) {
        isUnique = true;
      }
    }

    console.log(codeid);
    return codeid;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const codeid = await GenerateCode();
      console.log("Generated codeId:", codeid);
      const fileRef = ref(storage, `projects/${codeid}`);
      await uploadBytes(fileRef, selectedFile);
      const photoURL =
        (await getDownloadURL(fileRef)) || "https://i.imgur.com/4tBUxz7.png";

      await setDoc(doc(db, "projects", codeid), {
        name: name,
        active: true,
        createdAt: new Date(),
        photoURL: photoURL,
        id: codeid,
        members: {
          [user.uid]: "owner",
        },
      });
      console.log("Project document created successfully with codeId:", codeid);

      updateProjectId(codeid);

      navigate("/admin/setup/project/plan");
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
            <div className="form__top-title">Create Your Project</div>
            <div className="form__top-subtitle">
              Enter details to create your new project!
            </div>
          </div>
        </div>

        <form onSubmit={(e) => HandleSubmit(e)} className="form">
          <div className="form__input-box">
            <label htmlFor="name">Project Name</label>
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
              <label htmlFor="name">Upload a project picture</label>

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
            <label htmlFor="">Project Type</label>
            <div className="form__radio-container">
              <label>
                <input
                  type="radio"
                  name="type"
                  required
                  value="web"
                  onChange={(e) => setType(e.target.value)}
                  checked={type === "web"}
                ></input>
                Website
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="store"
                  onChange={(e) => setType(e.target.value)}
                  checked={type === "store"}
                ></input>
                Store
              </label>
            </div>
          </div>

          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Create
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Want to join existing project?{" "}
              <Link to="/admin/setup/project/join">Join</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectCreate;
