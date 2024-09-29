import { useContext, useEffect, useState, createContext } from "react";

import { UserAuth } from "./AuthContext";
import { db, database } from "../firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { onValue, ref } from "firebase/database";

const UserDocsContext = createContext();

export const UserDocsContextProvider = ({ children }) => {
  const [company, setCompany] = useState({});
  const [companyId, setCompanyId] = useState("");
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
        const id = doc.id;
        if (companyData.members && companyData.members[userId]) {
          console.log("User company:", companyData, "User company ID:", id);
          setCompanyId(id);
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
      const data = docSnap.data();
      if (data) {
        console.log("User profile:", data);
        setProfile(data);
      }
    } catch (e) {
      console.error("Błąd podczas wyszukiwania profilu:", e.message);
    }
  };

  const findCompanySubscription = async (companyId) => {
    try {
      const subRef = ref(database, "companies/" + companyId + "/subscription");
      onValue(subRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          console.log("Company subscription:", data);
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

    fetchCompany();
    fetchProfile();
  }, [userId]);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        await findCompanySubscription(companyId);
      } catch (e) {
        console.error("Błąd podczas pobierania subskrybcji:", e.message);
      }
    };
    fetchSubscription();
  }, [companyId]);

  return (
    <UserDocsContext.Provider
      value={{ profile, company, companyId, subscription }}
    >
      {children}
    </UserDocsContext.Provider>
  );
};

export const UserDocs = () => {
  return useContext(UserDocsContext);
};
