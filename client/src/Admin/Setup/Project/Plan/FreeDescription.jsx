import React from "react";

import { LuCheck } from "react-icons/lu";

const FreeDescription = () => {
  return (
    <ul className="form__plan__description-list">
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        1 Website
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Access to 5 Templates
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Basic Email Support (Mon-Fri, 9am-5pm)
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Monthly Feature Updates
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Basic SEO Tools
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Standard Analytics Dashboard
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Basic Customization Options
      </li>
    </ul>
  );
};

export default FreeDescription;
