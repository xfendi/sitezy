import { useContext, useEffect, useState, createContext } from "react";

import { UserAuth } from "./AuthContext";
import { db, database } from "../firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { onValue, ref } from "firebase/database";

const UserDocsContext = createContext();

export const UserDocsContextProvider = ({ children }) => {
  const [company, setCompany] = useState({});
  const [profile, setProfile] = useState({});
  const [subscription, setSubscription] = useState({});

  const { user } = UserAuth();

  const userId = user?.uid;

  const findUserCompany = async (userId) => {
    const companiesRef = collection(db, "companies");
    try {
      const querySnapshot = await getDocs(companiesRef);
      querySnapshot.forEach((doc) => {
        const companyData = doc.data();
        if (companyData.members && companyData.members[userId]) {
          console.log("User company:", companyData);
          setCompany(companyData);
        }
      });
    } catch (e) {
      console.error("Błąd podczas wyszukiwania firmy:", e.message);
    }
  };

  const findUserProfile = async (userId) => {
    const profileRef = doc(db, "profiles", userId);
    try {
      const docSnap = await getDoc(profileRef);
      console.log("User profile:", docSnap.data());
      setProfile(docSnap.data());
    } catch (e) {
      console.error("Błąd podczas wyszukiwania profilu:", e.message);
    }
  };

  const findUserSubscription = async (userId) => {
    try {
      const subRef = ref(database, "companies/" + userId + "/subscription");
      onValue(subRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          console.log("User subscription:", data);
          setSubscription(data);
        }
      });
    } catch (e) {
      console.error("Błąd podczas wyszukiwania subskrybcji:", e.message);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await findUserProfile(userId);
      } catch (e) {
        console.error("Błąd podczas pobierania profilu:", e.message);
      }
    };

    const fetchCompany = async () => {
      try {
        await findUserCompany(userId);
      } catch (e) {
        console.error("Błąd podczas pobierania firmy:", e.message);
      }
    };

    const fetchSubscription = async () => {
      try {
        await findUserSubscription(userId);
      } catch (e) {
        console.error("Błąd podczas pobierania subskrybcji:", e.message);
      }
    };

    fetchCompany();
    fetchSubscription();
    fetchProfile();
  }, [userId]);

  return (
    <UserDocsContext.Provider value={{ profile, company, subscription }} >
      {children}
    </UserDocsContext.Provider>
  );
};

export const UserDocs = () => {
  return useContext(UserDocsContext);
};
