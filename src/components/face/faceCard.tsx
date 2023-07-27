import React from "react";

import JACK from "../../assets/jack.gif";
import QUEEN from "../../assets/queen.gif";
import KING from "../../assets/king.gif";
import { FACE } from "../../utils/positions";
import Spot from "../spot/spot";
import Card from "../card/card";

type FaceCardProps = {
  face: "J" | "Q" | "K";
  suit: string;
  color?: boolean;
  hidden?: boolean;
};

const FaceCard: React.FC<FaceCardProps> = ({
  face,
  suit,
  color = false,
  hidden = false,
}) => {
  const returnSource = () => {
    switch (face) {
      case "J":
        return JACK;
      case "Q":
        return QUEEN;
      case "K":
        return KING;
      default:
        return "";
    }
  };

  return (
    <Card visible={hidden ? "hidden" : "visible"} color={color ? "red" : ""}>
      <div className="index">
        {face}
        <br />
        {suit}
      </div>
      <img className="face" src={returnSource()} alt="" />

      {FACE.map((value) => (
        <Spot position={value} suit={suit} />
      ))}
    </Card>
  );
};

export default FaceCard;
