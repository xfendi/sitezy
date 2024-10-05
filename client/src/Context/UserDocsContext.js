import { useContext, useEffect, useState, createContext } from "react";

import { db, database, auth } from "../firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { onValue, ref } from "firebase/database";

const UserDocsContext = createContext();

export const UserDocsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [projectId, setProjectId] = useState();
  const [profile, setProfile] = useState({});
  const [subscription, setSubscription] = useState({});

  const userId = auth.currentUser?.uid;

  const findProjects = async (userId) => {
    const projectsRef = collection(db, "projects");
    try {
      const querySnapshot = await getDocs(projectsRef);
      const projectsArray = [];
      querySnapshot.forEach((doc) => {
        const projectData = doc.data();
        if (projectData.members && projectData.members[userId]) {
          projectsArray.push({ ...doc.data() });
          console.log("User Projects:", projectsArray);
        }
      });
      setProjects(projectsArray);
    } catch (e) {
      console.error(
        "Błąd podczas wyszukiwania projektow uzytkownika:",
        e.message
      );
    }
  };

  const findSelectedProject = async (projectId) => {
    const projectRef = doc(db, "projects", projectId);
    try {
      const docSnap = await getDoc(projectRef);
      const data = docSnap.data();
      if (data) {
        console.log("Selected Project:", data);
        console.log("Selected Project ID:", data.id);
        setSelectedProject(data);
      }
    } catch (e) {
      console.error("Błąd podczas wyszukiwania projektu:", e.message);
    }
  };

  const findUserProfile = async (userId) => {
    const profileRef = doc(db, "profiles", userId);
    try {
      const docSnap = await getDoc(profileRef);
      const data = docSnap.data();
      if (data) {
        console.log("User Profile:", data);
        setProfile(data);
      }
    } catch (e) {
      console.error("Błąd podczas wyszukiwania profilu:", e.message);
    }
  };

  const findSubscription = async (projectId) => {
    try {
      const subRef = ref(database, "projects/" + projectId + "/subscription");
      onValue(subRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          console.log("Selected Project Subscription:", data);
          setSubscription(data);
        }
      });
    } catch (e) {
      console.error("Błąd podczas wyszukiwania subskrybcji:", e.message);
    }
  };

  const updateProjectId = (newProjectId) => {
    console.log("Aktualizuję projectId:", newProjectId);
    setProjectId(newProjectId);
    localStorage.setItem("projectId", newProjectId);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await findUserProfile(userId);
      } catch (e) {
        console.error("Błąd podczas pobierania profilu:", e.message);
      }
    };

    const fetchProjects = async () => {
      try {
        await findProjects(userId);
      } catch (e) {
        console.log("Błąd podczas pobierania projektow:", e.message);
      }
    };

    fetchProjects();
    fetchProfile();
  }, [userId]);

  useEffect(() => {
    if (!auth.currentUser) {
      setProjectId("");
      localStorage.removeItem("projectId");
    }
    const storedProjectId = localStorage.getItem("projectId");
    if (storedProjectId) {
      setProjectId(storedProjectId);
    }
  }, [userId]);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        await findSubscription(projectId);
      } catch (e) {
        console.error("Błąd podczas pobierania subskrypcji:", e.message);
      }
    };

    const fetchProject = async () => {
      try {
        await findSelectedProject(projectId);
      } catch (e) {
        console.error("Błąd podczas pobierania projektu:", e.message);
      }
    };

    fetchProject();
    fetchSubscription();
  }, [projectId]);

  return (
    <UserDocsContext.Provider
      value={{
        profile,
        projects,
        subscription,
        selectedProject,
        projectId,
        updateProjectId,
      }}
    >
      {children}
    </UserDocsContext.Provider>
  );
};

export const UserDocs = () => {
  return useContext(UserDocsContext);
};
