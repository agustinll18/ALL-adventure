import React from "react";

const sidebarVscEN = () => {
  return (
    <div className="sidebarVsc clearfix">
      <div className="itemSelected">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file"
        >
          <path
            fill="none"
            d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
          ></path>
          <polyline points="13 2 13 9 20 9"></polyline>
        </svg>
        <p class="texto" id="filesVsc">
          Files
        </p>
      </div>
    </div>
  );
};

export default sidebarVscEN;
