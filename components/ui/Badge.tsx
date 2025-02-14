import React from "react";

interface BadgeProps {
  text: string;
  color?: string; 
  bgColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, color = "text-blue-600", bgColor = "bg-blue-100" }) => {
  return (
    <span
      className={`inline-block ${bgColor} ${color} text-sm font-medium py-1 px-3 rounded-full`}
    >
      {text}
    </span>
  );
};
export default Badge;