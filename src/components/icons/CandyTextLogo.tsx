import React from "react";
import CandyLogo from "../../assets/candy-logo.png";

type CandyTextLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

const CandyTextLogo: React.FC<CandyTextLogoProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <img
      src={CandyLogo}
      alt="Candy by DLM"
      className={className}
      style={{
        width,
        height,
        objectFit: "contain",
      }}
    />
  );
};

export default CandyTextLogo;
