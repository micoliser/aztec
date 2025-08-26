import React from "react";

const PrivacyBadge = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#222" opacity="0.7" />
    <rect x="8" y="14" width="16" height="6" rx="3" fill="#fff" />
    <ellipse cx="12" cy="17" rx="3" ry="3" fill="#222" />
    <ellipse cx="20" cy="17" rx="3" ry="3" fill="#222" />
    <rect x="10" y="13" width="12" height="2" rx="1" fill="#fff" />
  </svg>
);

export default PrivacyBadge;
