import React from "react";

import { UserAuth } from "../../../Context/AuthContext";

const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short", // Skrócony dzień tygodnia (Mon)
    month: "long", // Pełna nazwa miesiąca (July)
    day: "numeric", // Dzień miesiąca (7)
  });
};

const Main = () => {
  const currentDate = new Date();
  const { user } = UserAuth();

  const displayName = user.displayName;
  const firstName = displayName.split(" ")[0];

  return (
    <section className="main-container">
      <div className="main-header">
        <div className="main-header_date">{formatDate(currentDate)}</div>
        <div className="main-header_title text-3xl font-semibold">
          Hello, {firstName}
        </div>
        <div className="main-header_gradient text-3xl font-semibold">
          How can I help you today?
        </div>
      </div>
      <section className="main-section"></section>
    </section>
  );
};

export default Main;
