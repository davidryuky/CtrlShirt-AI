import React from 'react';

interface ChestIconProps {
  className?: string;
}

const ChestIcon: React.FC<ChestIconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className || "h-6 w-6"}
        style={{ imageRendering: 'pixelated' }}
    >
        <path d="M5 6H7V8H5V6Z" fill="#A16207"/>
        <path d="M17 6H19V8H17V6Z" fill="#A16207"/>
        <path d="M9 6H15V8H9V6Z" fill="#FBBF24"/>
        <path d="M3 8H21V10H3V8Z" fill="#A16207"/>
        <path d="M3 10H5V12H3V10Z" fill="#A16207"/>
        <path d="M19 10H21V12H19V10Z" fill="#A16207"/>
        <path d="M5 10H19V12H5V10Z" fill="#CA8A04"/>
        <path d="M5 12H7V14H5V12Z" fill="#A16207"/>
        <path d="M17 12H19V14H17V12Z" fill="#A16207"/>
        <path d="M7 12H17V14H7V12Z" fill="#854D0E"/>
        <path d="M7 14H9V16H7V14Z" fill="#A16207"/>
        <path d="M15 14H17V16H15V14Z" fill="#A16207"/>
        <path d="M9 14H15V16H9V14Z" fill="#CA8A04"/>
        <path d="M5 16H19V18H5V16Z" fill="#A16207"/>
        <path d="M3 18H21V20H3V18Z" fill="#854D0E"/>
        <path d="M9 10H15V11H9V10Z" fill="#FBBF24"/>
    </svg>
);

export default ChestIcon;