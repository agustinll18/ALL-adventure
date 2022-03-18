import React from "react";

const sidebarVscEN = () => {
  return (
    <div className="sidebarVsc clearfix">
      <div className="itemSelected">
      {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="40px" height="40px"><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M19,20c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1h7.6L19,8.4V20z"/><path d="M19,20c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1h7.6L19,8.4V20z" opacity=".3"/><path d="M18.5,9H13V3.5l2.8,2.8L18.5,9z"/><line x1="8" x2="16" y1="13" y2="13" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><line x1="8" x2="16" y1="17" y2="17" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/></svg> */}
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
        <p class="texto">Files</p>
      </div>
    </div>
  );
};

export default sidebarVscEN;
