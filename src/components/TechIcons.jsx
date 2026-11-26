import React from 'react';

export const PythonIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path
      d="M63.5 8C43.8 8 36.8 16.7 36.8 28.5V39.2H64.2V42.9H25.8C14 42.9 4 52.8 4 72.5C4 92.2 12.8 102.1 24.6 102.1H34.4V89.3C34.4 75.6 45.3 64.7 59 64.7H86.4V59C86.4 48.2 78.4 39.2 64.2 39.2H86.4V28.5C86.4 16.7 77.4 8 63.5 8ZM48.8 18.8C52.4 18.8 55.4 21.8 55.4 25.4C55.4 29 52.4 32 48.8 32C45.2 32 42.2 29 42.2 25.4C42.2 21.8 45.2 18.8 48.8 18.8Z"
      fill="#387EB8"
    />
    <path
      d="M64.5 120C84.2 120 91.2 111.3 91.2 99.5V88.8H63.8V85.1H102.2C114 85.1 124 75.2 124 55.5C124 35.8 115.2 25.9 103.4 25.9H93.6V38.7C93.6 52.4 82.7 63.3 69 63.3H41.6V69C41.6 79.8 49.6 88.8 63.8 88.8H41.6V99.5C41.6 111.3 50.6 120 64.5 120ZM79.2 109.2C75.6 109.2 72.6 106.2 72.6 102.6C72.6 99 75.6 96 79.2 96C82.8 96 85.8 99 85.8 102.6C85.8 106.2 82.8 109.2 79.2 109.2Z"
      fill="#FFE052"
    />
  </svg>
);

export const SqlIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#336791" strokeWidth="2" fill="rgba(51, 103, 145, 0.2)" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#336791" strokeWidth="2" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#336791" strokeWidth="2" />
    <path d="M9 12h6M12 9v6" stroke="#42B6E8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PandasIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <rect x="24" y="20" width="18" height="88" rx="4" fill="#150458" />
    <rect x="55" y="44" width="18" height="64" rx="4" fill="#E70488" />
    <rect x="86" y="20" width="18" height="52" rx="4" fill="#FFD43B" />
    <rect x="55" y="20" width="18" height="18" rx="4" fill="#42B6E8" />
    <rect x="86" y="80" width="18" height="28" rx="4" fill="#150458" />
  </svg>
);

export const NumpyIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path d="M64 12L116 42V86L64 116L12 86V42L64 12Z" fill="#4DABCF" fillOpacity="0.2" stroke="#4DABCF" strokeWidth="4" />
    <path d="M64 12V64M64 64V116M64 64L116 42M64 64L12 42M12 86L64 64M116 86L64 64" stroke="#013243" strokeWidth="3" />
    <circle cx="64" cy="64" r="14" fill="#4D77CF" />
    <text x="64" y="69" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NP</text>
  </svg>
);

export const ScikitLearnIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path d="M64 14C36.4 14 14 36.4 14 64C14 91.6 36.4 114 64 114C91.6 114 114 91.6 114 64C114 36.4 91.6 14 64 14Z" fill="#F89939" fillOpacity="0.15" />
    <path d="M28 76L64 40L100 76" stroke="#3499CD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="76" r="10" fill="#F89939" stroke="#3499CD" strokeWidth="3" />
    <circle cx="64" cy="40" r="10" fill="#3499CD" stroke="#FFFFFF" strokeWidth="2" />
    <circle cx="100" cy="76" r="10" fill="#F89939" stroke="#3499CD" strokeWidth="3" />
    <circle cx="64" cy="88" r="8" fill="#3499CD" />
  </svg>
);

export const GitIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path d="M125.7 57.5L70.5 2.3C67.4-0.8 62.4-0.8 59.3 2.3L48.1 13.5L62.2 27.6C65.5 26.5 69.3 27.3 71.9 29.8C74.4 32.4 75.3 36.1 74.3 39.4L87.8 52.9C91.1 51.9 94.8 52.8 97.4 55.3C101.3 59.2 101.3 65.5 97.4 69.4C93.5 73.3 87.2 73.3 83.3 69.4C80.7 66.8 79.8 63 80.9 59.7L68.8 47.6V79.5C70.9 80.6 72.8 82.3 74.1 84.6C76.8 89.4 75.2 95.5 70.4 98.2C65.6 100.9 59.5 99.3 56.8 94.5C54.1 89.7 55.7 83.6 60.5 80.9C62.4 79.8 64.5 79.5 66.5 79.7V47.3C64.5 47.5 62.4 47.2 60.5 46.1C57.9 44.6 56.2 42.1 55.5 39.3L41.6 25.4L2.3 64.7C-0.8 67.8-0.8 72.8 2.3 75.9L57.5 131.1C60.6 134.2 65.6 134.2 68.7 131.1L125.7 74.1C128.8 71 128.8 66 125.7 57.5Z" fill="#F05032" />
  </svg>
);

export const GithubIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinuxIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <ellipse cx="64" cy="74" rx="36" ry="42" fill="#FFE873" />
    <ellipse cx="64" cy="38" rx="22" ry="24" fill="#0A0F17" />
    <ellipse cx="64" cy="76" rx="28" ry="34" fill="#FFFFFF" />
    <circle cx="56" cy="34" r="4" fill="#FFFFFF" />
    <circle cx="72" cy="34" r="4" fill="#FFFFFF" />
    <circle cx="57" cy="35" r="2" fill="#0A0F17" />
    <circle cx="71" cy="35" r="2" fill="#0A0F17" />
    <path d="M64 42L56 50H72L64 42Z" fill="#FFA500" />
    <ellipse cx="42" cy="116" rx="16" ry="7" fill="#FFA500" />
    <ellipse cx="86" cy="116" rx="16" ry="7" fill="#FFA500" />
  </svg>
);

export const DockerIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path d="M116.8 58.4C114.7 58.1 110.1 57.3 105.7 60.1C102.7 54.7 97.4 51.5 97.4 51.5L95.5 53.6C95.5 53.6 98.7 57.9 97.8 63.8C94.5 66 90.1 66.2 87.7 66.2H12C8.7 66.2 6 68.9 6 72.2C6 94.6 23.3 108.9 49.3 108.9C79.8 108.9 104.9 90.6 109.8 68.2C113.8 68.6 119.5 67.2 122 61.2L120.3 59.8C119.4 60.5 117.8 58.5 116.8 58.4Z" fill="#2496ED" />
    <rect x="30" y="52" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="45" y="52" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="60" y="52" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="75" y="52" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="45" y="38" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="60" y="38" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="75" y="38" width="12" height="10" rx="1" fill="#2496ED" />
    <rect x="60" y="24" width="12" height="10" rx="1" fill="#2496ED" />
  </svg>
);

export const SparkIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path d="M64 8L74 46L112 36L82 64L118 84L76 86L86 124L58 96L38 128L42 88L8 86L40 64L12 40L50 48L64 8Z" fill="#E25A1C" />
    <circle cx="64" cy="66" r="14" fill="#FFFFFF" fillOpacity="0.8" />
    <path d="M64 42L68 58L84 62L70 70L74 86L64 74L54 86L58 70L44 62L60 58L64 42Z" fill="#E25A1C" />
  </svg>
);

export const HadoopIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <ellipse cx="64" cy="68" rx="42" ry="34" fill="#FFDC00" stroke="#000000" strokeWidth="3" />
    <circle cx="48" cy="56" r="5" fill="#000000" />
    <circle cx="50" cy="54" r="1.5" fill="#FFFFFF" />
    <path d="M30 64C20 62 14 74 18 86C20 92 26 94 32 90" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" />
    <ellipse cx="88" cy="52" rx="14" ry="20" fill="#FFDC00" stroke="#000000" strokeWidth="3" />
    <path d="M48 102V118M64 102V120M80 102V118" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const MongoDbIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <path d="M64 8C64 8 26 50 26 80C26 102 42 118 64 122C86 118 102 102 102 80C102 50 64 8 64 8Z" fill="#13AA52" />
    <path d="M64 12C64 12 63 48 64 120C78 116 94 100 94 80C94 56 64 12 64 12Z" fill="#108842" />
    <path d="M64 22V116" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.4" />
  </svg>
);

export const TableauIcon = ({ size = 28 }) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 128 128" fill="none">
    <rect x="58" y="14" width="12" height="30" rx="2" fill="#E8762D" />
    <rect x="49" y="23" width="30" height="12" rx="2" fill="#E8762D" />
    <rect x="58" y="84" width="12" height="30" rx="2" fill="#1F4570" />
    <rect x="49" y="93" width="30" height="12" rx="2" fill="#1F4570" />
    <rect x="14" y="58" width="30" height="12" rx="2" fill="#4B6A9B" />
    <rect x="23" y="49" width="12" height="30" rx="2" fill="#4B6A9B" />
    <rect x="84" y="58" width="30" height="12" rx="2" fill="#59879B" />
    <rect x="93" y="49" width="12" height="30" rx="2" fill="#59879B" />
    <rect x="56" y="54" width="16" height="20" rx="2" fill="#C23927" />
    <rect x="54" y="56" width="20" height="16" rx="2" fill="#C23927" />
  </svg>
);

export const TechIcon = ({ name, size = 28 }) => {
  const normalized = String(name).toLowerCase().trim();
  switch (normalized) {
    case 'python':
      return <PythonIcon size={size} />;
    case 'sql':
      return <SqlIcon size={size} />;
    case 'pandas':
      return <PandasIcon size={size} />;
    case 'numpy':
      return <NumpyIcon size={size} />;
    case 'scikit-learn':
    case 'sklearn':
      return <ScikitLearnIcon size={size} />;
    case 'git':
      return <GitIcon size={size} />;
    case 'github':
      return <GithubIcon size={size} />;
    case 'linux':
      return <LinuxIcon size={size} />;
    case 'docker':
      return <DockerIcon size={size} />;
    case 'apache spark':
    case 'spark':
      return <SparkIcon size={size} />;
    case 'hadoop':
      return <HadoopIcon size={size} />;
    case 'mongodb':
      return <MongoDbIcon size={size} />;
    case 'tableau':
      return <TableauIcon size={size} />;
    default:
      return (
        <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
  }
};
