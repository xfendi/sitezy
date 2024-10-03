import React from "react";

import { LuCheck } from "react-icons/lu";

const ProDescription = () => {
  return (
    <ul className="form__plan__description-list">
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Access to 25+ templates
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Priority email support (Mon-Sun, 8am-8pm)
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Weekly feature updates
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Advanced SEO tools (meta tags, keywords)
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Advanced analytics dashboard (traffic sources, user behavior)
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Custom domain support
      </li>
      <li>
        <div className="icon-primary">
          <LuCheck size={15} />
        </div>{" "}
        Full customization options (fonts, colors, layout tweaks)
      </li>
    </ul>
  );
};

export default ProDescription;
