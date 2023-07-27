import React from "react";

type CardProps = {
  style?: any;
  color?: string;
  visible?: "visible" | "hidden" | "collapse";
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  style,
  color = "",
  visible = "visible",
  children,
}) => {
  return (
    <div className="card" style={style}>
      <div className={`front ${color}`} style={{ visibility: visible }}>
        {children}
      </div>
    </div>
  );
};

export default Card;
