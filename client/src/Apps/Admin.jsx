import React, { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import '../Styles/admin.css'

const Admin = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    logout();
    navigate("/");
  };

  const [company, setCompany] = useState(false);
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
          return; // Przerywa pętlę po znalezieniu pierwszej pasującej firmy
        }
      });

      if (companyName) {
        return {
          companyName,
        };
      } else {
        return null; // Brak danych
      }
    } catch (error) {
      console.error("Błąd podczas wyszukiwania firmy:", error);
      return null;
    }
  };

  findCompanyAndRoleByUserId(userId).then((result) => {
    if (result) {
      setCompany(true);
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

  return (
    <>
      <div className={profile.theme} >
        <h1>Acount</h1>
        <img src={user && user.photoURL} width={100} alt="profile url" />
        <p style={{ color: profile.color, }} >Email: {user && user.email}</p>
        <p>Name: {user && user.displayName}</p>
        <p>Company: {company ? "tak" : "nie"}</p>
        <p>Profile: {profile ? "tak" : "nie"}</p>
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
