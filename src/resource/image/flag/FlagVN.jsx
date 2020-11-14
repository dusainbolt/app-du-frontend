import React from "react";

function FlagVN() {
  return (
    <svg
      className="flag-icon"
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="20" rx="2" fill="white" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="20">
        <rect width="28" height="20" rx="2" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <rect width="28" height="20" fill="#EA403F" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 12.34L10.4733 14.8541L11.7745 10.7231L8.29366 8.1459L12.6246 8.1069L14 4L15.3754 8.1069L19.7063 8.1459L16.2255 10.7231L17.5267 14.8541L14 12.34Z"
          fill="#FFFE4E"
        />
      </g>
    </svg>
  );
}

export default FlagVN;
