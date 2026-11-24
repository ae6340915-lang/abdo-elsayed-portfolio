import React from 'react';

// Khamsat Logo / Icon (Iconic Arabic '٥' / Five Petal Service Emblem)
export const KhamsatIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="#FF7800" fillOpacity="0.16" stroke="#FF7800" strokeWidth="2" />
    <path
      d="M16 8C19.866 8 23 11.134 23 15C23 18.866 19.866 22 16 22C12.134 22 9 18.866 9 15C9 11.134 12.134 8 16 8Z"
      stroke="#FF7800"
      strokeWidth="2.5"
    />
    <circle cx="16" cy="15" r="2.5" fill="#FF7800" />
    <path d="M16 24V26" stroke="#FF7800" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Mostaql Logo / Icon (Signature Endless Infinity-M Ribbon)
export const MostaqlIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#2386C8" fillOpacity="0.16" stroke="#2386C8" strokeWidth="1.5" />
    <path
      d="M8 19C8 14 11 11 14 11C16.5 11 18 13.5 18 16.5C18 19.5 19.5 22 22 22C24.5 22 26 19.5 26 16.5C26 13 24 10 20 10"
      stroke="#2386C8"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="19" r="1.5" fill="#2386C8" />
  </svg>
);

// Kafiil Logo / Icon (Shield & Interlocking Growth Knot)
export const KafiilIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#10B981" fillOpacity="0.16" stroke="#10B981" strokeWidth="1.5" />
    <path
      d="M16 6L24 10V16C24 21 20.5 25 16 26.5C11.5 25 8 21 8 16V10L16 6Z"
      stroke="#10B981"
      strokeWidth="2"
      fill="#10B981"
      fillOpacity="0.12"
    />
    <path
      d="M12 16L15 19L20 13"
      stroke="#10B981"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Nafezly Logo / Icon (Dynamic Precision Flight / Check Mark)
export const NafezlyIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#8B5CF6" fillOpacity="0.16" stroke="#8B5CF6" strokeWidth="1.5" />
    <path
      d="M7 16L19 7L16 16L25 10L13 25L15 18L7 16Z"
      fill="#8B5CF6"
      stroke="#8B5CF6"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

export const getFreelanceIcon = (platformId, size = 26) => {
  switch (platformId) {
    case 'khamsat':
      return <KhamsatIcon size={size} />;
    case 'mostaql':
      return <MostaqlIcon size={size} />;
    case 'kafiil':
      return <KafiilIcon size={size} />;
    case 'nafezly':
      return <NafezlyIcon size={size} />;
    default:
      return null;
  }
};
