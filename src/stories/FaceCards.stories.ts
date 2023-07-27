import type { Meta, StoryObj } from "@storybook/react";
import "../styles/index.css";

import { CLUBS, HEARTS, SPADES } from "../utils/suits";
import FaceCard from "../components/face/faceCard";

const meta = {
  title: "Example/Face Cards",
  component: FaceCard,
  tags: ["autodocs"],
  argTypes: {
    face: { type: "string" },
    suit: { type: "string" },
    color: { type: "boolean", defaultValue: false },
    hidden: { type: "boolean", defaultValue: false },
  },
} satisfies Meta<typeof FaceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const JackCardRed: Story = {
  args: {
    face: "J",
    suit: HEARTS,
    color: true,
  },
};

export const KingCard: Story = {
  args: {
    face: "K",
    suit: SPADES,
    color: false,
  },
};

export const HidderCard: Story = {
  args: {
    face: "Q",
    suit: CLUBS,
    color: false,
    hidden: true,
  },
};
