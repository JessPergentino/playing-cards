import React from "react";

type SpotProps = {
  position: string;
  suit: string;
};

const Spot: React.FC<SpotProps> = ({ position, suit }) => {
  return <div className={position}>{suit}</div>;
};

export default Spot;
