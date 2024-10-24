import React from "react";
import { NavLink, useParams } from "react-router-dom";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { UserDocs } from "../../../Context/UserDocsContext";
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
  const { id } = useParams();
  const { user } = UserAuth();

  const displayName = user.displayName;
  const firstName = displayName.split(" ")[0];

  return (
    <section className="main-container">
      {/*<div class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full rounded-full bg-fuchsia-400 opacity-10 blur-[100px]"></div>
      </div>*/}
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
