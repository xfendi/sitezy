import { useContext, useEffect, useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      function () {
        console.log("Successfully created new user.");
        setDoc(doc(db, "profiles", auth.currentUser?.uid), {
          createdAt: new Date(),
        });
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
    );
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        window.location.href = "/account/setup/plan";
      }
    });
  };

  const githubAuth = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      if (result.user) {
        window.location.href = "/account/setup/plan";
      }
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) console.log("User Auth:", currentUser);
      setUser(currentUser);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, login, googleAuth, githubAuth, logout, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
