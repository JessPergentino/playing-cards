import React from "react";
import Spot from "../spot/spot";
import {
  EIGHT,
  FIVE,
  FOUR,
  NINE,
  SEVEN,
  SIX,
  TEN,
  THREE,
  TWO,
} from "../../utils/positions";
import Card from "../card/card";

type IndexCardProps = {
  index: "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  suit: string;
  color?: boolean;
  hidden?: boolean;
};

const IndexCard: React.FC<IndexCardProps> = ({
  index,
  suit,
  color = false,
  hidden = false,
}) => {
  const renderSpots = () => {
    switch (index) {
      case "2":
        return TWO.map((value) => <Spot position={value} suit={suit} />);
      case "3":
        return THREE.map((value) => <Spot position={value} suit={suit} />);
      case "4":
        return FOUR.map((value) => <Spot position={value} suit={suit} />);
      case "5":
        return FIVE.map((value) => <Spot position={value} suit={suit} />);
      case "6":
        return SIX.map((value) => <Spot position={value} suit={suit} />);
      case "7":
        return SEVEN.map((value) => <Spot position={value} suit={suit} />);
      case "8":
        return EIGHT.map((value) => <Spot position={value} suit={suit} />);
      case "9":
        return NINE.map((value) => <Spot position={value} suit={suit} />);
      case "10":
        return TEN.map((value) => <Spot position={value} suit={suit} />);
      default:
        return <Spot position="ace" suit={suit} />;
    }
  };

  return (
    <Card visible={hidden ? "hidden" : "visible"} color={color ? "red" : ""}>
      <div className="index">
        {index}
        <br />
        {suit}
      </div>

      {renderSpots()}
    </Card>
  );
};

export default IndexCard;
