import type { Meta, StoryObj } from "@storybook/react";
import "../styles/index.css";

import IndexCard from "../components/index/indexCard";
import { CLUBS, HEARTS, SPADES } from "../utils/suits";

const meta = {
  title: "Example/Index Cards",
  component: IndexCard,
  tags: ["autodocs"],
  argTypes: {
    index: { type: "string" },
    suit: { type: "string" },
    color: { type: "boolean", defaultValue: false },
    hidden: { type: "boolean", defaultValue: false },
  },
} satisfies Meta<typeof IndexCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberCardRed: Story = {
  args: {
    index: "5",
    suit: HEARTS,
    color: true,
  },
};

export const AceCard: Story = {
  args: {
    index: "A",
    suit: CLUBS,
    color: false,
  },
};

export const HidderCard: Story = {
  args: {
    index: "10",
    suit: SPADES,
    color: false,
    hidden: true,
  },
};
