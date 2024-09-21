import { useEffect } from "react";

// Global Domain Variables
export const DOMAIN = "localhost:3000";
export const useSubdomainRedirect = (desiredSubdomain) => {
  useEffect(() => {
    const hostname = window.location.hostname;
    const currentSubdomain = hostname.split(".")[0];

    if (currentSubdomain !== desiredSubdomain) {
      window.location.href = `http://${desiredSubdomain}.${DOMAIN}`;
    }
  }, [desiredSubdomain]);
};