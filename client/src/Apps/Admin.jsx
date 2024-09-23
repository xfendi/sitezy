import React, { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import "../Styles/admin.css";

const Admin = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const [company, setCompany] = useState("");
  const [profile, setProfile] = useState(false);

  const userId = user.uid;

  const findCompanyAndRoleByUserId = async (userId) => {
    const companiesRef = collection(db, "companies");

    try {
      const querySnapshot = await getDocs(companiesRef);
      let companyName = null;
      querySnapshot.forEach((doc) => {
        const companyData = doc.data();
        if (companyData.members && companyData.members[userId]) {
          companyName = companyData.name;
          setCompany(companyName || "");
          return; // Przerywa pętlę po znalezieniu pierwszej pasującej firmy
        }
      });
    } catch (error) {
      console.error("Błąd podczas wyszukiwania firmy:", error);
      return null;
    }
  };

  findCompanyAndRoleByUserId(userId).then((result) => {
    if (result) {
      setCompany(result);
    } else {
      return;
    }
  });

  const findProfileByUserId = async (userId) => {
    const profileRef = doc(db, "profiles", userId);

    try {
      const docSnap = await getDoc(profileRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("Profil nie istnieje");
        return null;
      }
    } catch (e) {
      console.error("Błąd podczas pobierania profilu:", e.message);
      throw e;
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await findProfileByUserId(userId);
        if (userProfile) {
          console.log(userProfile);
          setProfile(userProfile);
        } else {
          console.log("Profil użytkownika nie został znaleziony");
          setProfile(false);
        }
      } catch (e) {
        console.log("Błąd podczas wyszukiwania profilu: ", e.message);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <>
      <div className={profile.theme}>
        <h1>Acount</h1>
        <img src={user && user.photoURL} width={100} alt="profile url" />
        <p style={{ color: profile.color }}>Email: {user && user.email}</p>
        <p>Name: {user && user.displayName}</p>
        <p>Company: {company}</p>
        <p>Profile: {profile ? "Yes" : "No"}</p>
        <br />
        <p>Primary color: {profile.color}</p>
        <p>Theme: {profile.theme}</p>
        <br />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Admin;
