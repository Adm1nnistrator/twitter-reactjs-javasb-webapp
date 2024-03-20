import React from "react";
import { navigationMenu } from "./NavigationMenu";

const Navigation = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col items-start">
      <div className="py-5">
        <svg
          height="30"
          width="30"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>
      <div className="space-y-6" style={{ marginTop: "2em" }}>
        {navigationMenu.map((item, index) => (
          <div
            className="cursor-pointer flex items-center space-x-3"
            key={item.title}
            style={{ marginTop: index > 0 ? "1.6em" : 0 }}
          >
            <div
              style={{
                fontSize: "1.2em",
                display: "flex",
                alignItems: "center",
                marginRight: "0.5em",
              }}
            >
              {React.cloneElement(item.icon, { style: { fontSize: "32px" } })}
              <span className="text-l" style={{ marginLeft: "1em" }}>
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
