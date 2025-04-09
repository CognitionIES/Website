import React from "react";

interface DividerElementProps {
  orientation?: "vertical" | "horizontal";
}

const DividerElement: React.FC<DividerElementProps> = ({
  orientation = "vertical",
}) => {
  const isVertical = orientation === "vertical";


  return (
    <div
      className={`flex ${
        isVertical ? "flex-col w-8 min-h-screen" : "flex-row h-8 w-full"
      } items-center justify-center bg-gradient-to-b from-[#E6F0F5] to-[#003C46] relative overflow-hidden`}
    >
      <div
        className={`absolute ${
          isVertical ? "h-full w-px" : "w-full h-px"
        } bg-gradient-to-b from-[#0098af] to-[#00b4d8]`}
      />

      {/* Icons along divider */}
     
    </div>
  );
};

export default DividerElement;
