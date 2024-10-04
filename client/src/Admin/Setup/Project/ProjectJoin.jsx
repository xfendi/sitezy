import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const { updateProjectId } = UserDocs();
  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const q = query(collection(db, "projects"), where("invite", "==", code));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Invalid code entered!");
        return;
      }

      const projectDoc = querySnapshot.docs[0];
      const data = projectDoc.data();
      const projectRef = projectDoc.ref;

      await updateDoc(projectRef, {
        [`members.${userId}`]: "member",
      });

      updateProjectId(data.id);

      navigate(`/admin/project/${data.id}`);
    } catch (e) {
      setError(e.message);
      console.error("Błąd podczas dołączania do firmy:", e.message);
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
            <div className="form__top-title">Join Existing Project</div>
            <div className="form__top-subtitle">
              Enter invite code to join new project!
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
              Want to create own project?{" "}
              <Link to="/admin/setup/project/create">Create</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Join;
